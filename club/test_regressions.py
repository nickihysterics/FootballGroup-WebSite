from copy import deepcopy
from io import StringIO
from unittest.mock import patch

from django.core.cache import cache
from django.core.management import call_command
from django.test import TestCase

from .models import ClubProfile, GalleryItem, Match, NewsPost, Player
from .services.reference_snapshot import load_snapshot, sync_reference_data


class ReleaseRegressionTests(TestCase):
    def setUp(self):
        cache.clear()

    def test_player_deep_link_and_missing_player(self):
        player = Player.objects.create(full_name="Test Player", number=10, position="MF")
        response = self.client.get(f"/team/{player.slug}/")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, player.full_name)
        self.assertEqual(self.client.get("/team/missing-player/").status_code, 404)

    def test_seed_does_not_overwrite_existing_content(self):
        profile = ClubProfile.objects.create(name="My club", email="owner@example.com")
        call_command("seed_demo", stdout=StringIO())
        profile.refresh_from_db()
        self.assertEqual(profile.name, "My club")
        self.assertEqual(Player.objects.count(), 0)

    def test_failed_replacement_rolls_back_deletions_and_partial_inserts(self):
        original = Player.objects.create(full_name="Existing Player", number=99, position="MF")
        snapshot = deepcopy(load_snapshot())
        snapshot["players"][1]["birth_date"] = "invalid-date"
        with patch("club.services.reference_snapshot.load_snapshot", return_value=snapshot):
            with self.assertRaises(ValueError):
                sync_reference_data(replace=True)
        self.assertEqual(list(Player.objects.values_list("pk", flat=True)), [original.pk])

    def test_merge_import_is_idempotent_and_keeps_unrelated_player(self):
        original = Player.objects.create(full_name="Independent Player", number=99, position="MF")
        sync_reference_data()
        counts = [model.objects.count() for model in (Player, Match, NewsPost, GalleryItem)]
        sync_reference_data()
        self.assertEqual(
            counts, [model.objects.count() for model in (Player, Match, NewsPost, GalleryItem)]
        )
        self.assertTrue(Player.objects.filter(pk=original.pk).exists())

    def test_all_public_routes_and_read_only_apis(self):
        for route in ("/", "/team/", "/matches/", "/media/", "/contacts/"):
            with self.subTest(route=route):
                self.assertEqual(self.client.get(route).status_code, 200)
        for name in ("site", "home", "team", "matches", "media", "contacts"):
            with self.subTest(api=name):
                response = self.client.get(f"/api/{name}/")
                self.assertEqual(response.status_code, 200)
                self.assertIn("club", response.json())
                self.assertEqual(self.client.post(f"/api/{name}/").status_code, 405)

    def test_cache_outage_falls_back_to_database(self):
        from .payloads import build_site_payload

        ClubProfile.objects.create(name="Fallback club")
        with (
            patch("club.cache_utils.cache.get", side_effect=ConnectionError),
            patch("club.cache_utils.cache.set", side_effect=ConnectionError),
        ):
            self.assertEqual(build_site_payload()["club"]["name"], "Fallback club")

    def test_health_and_admin_requirements(self):
        self.assertEqual(self.client.get("/health/").json(), {"ok": True, "version": "1.0.0"})
        self.assertEqual(self.client.get("/admin/").status_code, 302)

    def test_reference_snapshot_does_not_fetch_external_media(self):
        snapshot = load_snapshot()
        for key in ("players", "news", "gallery_items"):
            for record in snapshot[key]:
                for field, value in record.items():
                    if field.startswith("remote_"):
                        self.assertFalse(value)
