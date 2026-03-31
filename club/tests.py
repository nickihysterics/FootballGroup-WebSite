from django.test import TestCase

from .models import ClubProfile, Player


class PublicSiteTests(TestCase):
    def test_home_page_contains_server_rendered_navigation(self):
        response = self.client.get("/", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Главная")
        self.assertContains(response, "Команда")
        self.assertContains(response, "Контакты")

    def test_robots_txt_served_from_root(self):
        response = self.client.get("/robots.txt", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["Content-Type"], "text/plain; charset=utf-8")
        self.assertContains(response, "User-agent: *")

    def test_site_api_exposes_bilingual_club_fields(self):
        ClubProfile.objects.create(
            name="ФК Зенит",
            name_ru="ФК Зенит",
            name_en="FC Zenit",
            short_name="Газпром / Зенит",
            short_name_ru="Газпром / Зенит",
            short_name_en="Gazprom / Zenit",
            tagline="Арена и матч-дэй",
            tagline_ru="Арена и матч-дэй",
            tagline_en="Arena and matchday",
            mission="Описание",
            mission_ru="Описание",
            mission_en="Description",
            city="Санкт-Петербург",
            city_ru="Санкт-Петербург",
            city_en="Saint Petersburg",
            stadium="Газпром Арена",
            stadium_ru="Газпром Арена",
            stadium_en="Gazprom Arena",
            address="Санкт-Петербург",
            address_ru="Санкт-Петербург",
            address_en="Saint Petersburg",
            phone="+7 (800) 000-00-00",
            email="team@example.com",
            hero_badge="Газпром футбольная программа",
            hero_badge_ru="Газпром футбольная программа",
            hero_badge_en="Gazprom football program",
            source_name="ФК «Зенит»",
            source_name_ru="ФК «Зенит»",
            source_name_en="FC Zenit",
        )

        response = self.client.get("/api/site/", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload["club"]["name_ru"], "ФК Зенит")
        self.assertEqual(payload["club"]["name_en"], "FC Zenit")
        self.assertEqual(payload["club"]["hero_badge_en"], "Gazprom football program")

    def test_team_api_exposes_bilingual_player_fields(self):
        Player.objects.create(
            full_name="Douglas Santos",
            full_name_ru="Дуглас Сантос",
            full_name_en="Douglas Santos",
            number=3,
            position=Player.Position.DEFENDER,
            bio="Douglas Santos is a defender for Zenit.",
            bio_ru="Дуглас Сантос — защитник «Зенита».",
            bio_en="Douglas Santos is a defender for Zenit.",
            achievements="18 matches · 1 goals · 2 YC",
            achievements_ru="18 матчей · 1 голов · 2 ЖК",
            achievements_en="18 matches · 1 goals · 2 YC",
            hometown="Joao Pessoa",
            hometown_ru="Жуан-Песоа",
            hometown_en="Joao Pessoa",
            place_of_birth="Joao Pessoa",
            place_of_birth_ru="Жуан-Песоа",
            place_of_birth_en="Joao Pessoa",
            citizenship="Brazil",
            citizenship_ru="Бразилия",
            citizenship_en="Brazil",
            previous_club="Hamburg",
            previous_club_ru="Гамбург",
            previous_club_en="Hamburg",
        )

        response = self.client.get("/api/team/", HTTP_HOST="127.0.0.1")

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        player = payload["players"][0]
        self.assertEqual(player["full_name_ru"], "Дуглас Сантос")
        self.assertEqual(player["full_name_en"], "Douglas Santos")
        self.assertEqual(player["citizenship_ru"], "Бразилия")
