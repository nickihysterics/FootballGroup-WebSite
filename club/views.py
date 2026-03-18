from django.core.cache import cache
from django.urls import reverse
from django.utils import timezone
from django.views.generic import TemplateView

from .models import ClubProfile, GalleryItem, Match, NewsPost, Player, Trophy
from .payloads import serialize_match
from .tasks import MATCH_HUB_CACHE_KEY, refresh_match_hub


class BasePageView(TemplateView):
    def get_match_hub(self):
        payload = cache.get(MATCH_HUB_CACHE_KEY)
        if payload is None:
            payload = refresh_match_hub()
        return payload


class HomeView(BasePageView):
    template_name = "pages/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        now = timezone.now()
        club_profile = ClubProfile.objects.order_by("id").first()
        featured_players = Player.objects.filter(featured=True).order_by("sort_order", "number")[:4]
        featured_news = NewsPost.objects.filter(featured=True).order_by("-published_at")[:3]
        featured_match = Match.objects.filter(start_at__gte=now).order_by("-featured", "start_at").first()
        latest_result = Match.objects.filter(status=Match.Status.FINISHED).order_by("-start_at").first()
        context["featured_players"] = featured_players or Player.objects.order_by("sort_order", "number")[:4]
        context["lineup_players"] = featured_players[:3] if featured_players else Player.objects.order_by("sort_order", "number")[:3]
        context["next_matches"] = Match.objects.filter(start_at__gte=now).order_by("start_at")[:4]
        context["featured_match"] = featured_match
        context["latest_result"] = latest_result
        context["featured_news"] = featured_news or NewsPost.objects.order_by("-published_at")[:3]
        context["ticker_news"] = NewsPost.objects.order_by("-published_at")[:4]
        context["trophies"] = Trophy.objects.all()[:4]
        context["gallery_items"] = GalleryItem.objects.all()[:6]
        context["match_hub"] = self.get_match_hub()
        context["matchday_island_payload"] = {
            "club": {
                "short_name": club_profile.short_name if club_profile else "Газпром Футбол",
                "city": club_profile.city if club_profile else "Санкт-Петербург",
                "stadium": club_profile.stadium if club_profile else "Газпром Арена",
            },
            "links": {
                "matches_url": reverse("matches"),
                "ticket_url": club_profile.ticket_url if club_profile else "",
                "membership_url": club_profile.membership_url if club_profile else "",
                "shop_url": club_profile.shop_url if club_profile else "",
                "hospitality_url": club_profile.hospitality_url if club_profile else "",
            },
            "featured_match": serialize_match(featured_match),
            "latest_result": serialize_match(latest_result),
        }
        return context


class TeamView(BasePageView):
    template_name = "pages/team.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["captain"] = Player.objects.filter(captain=True).first()
        context["players"] = Player.objects.order_by("sort_order", "number")
        return context


class MatchListView(BasePageView):
    template_name = "pages/matches.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        now = timezone.now()
        featured_match = Match.objects.filter(start_at__gte=now).order_by("-featured", "start_at").first()
        if not featured_match:
            featured_match = Match.objects.filter(featured=True).order_by("-start_at").first()
        context["featured_match"] = featured_match
        context["matches"] = Match.objects.order_by("-featured", "-start_at")
        return context


class MediaView(BasePageView):
    template_name = "pages/media.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["news_items"] = NewsPost.objects.all()[:6]
        context["gallery_items"] = GalleryItem.objects.all()
        return context


class ContactsView(BasePageView):
    template_name = "pages/contacts.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["recent_matches"] = Match.objects.filter(status=Match.Status.FINISHED).order_by("-start_at")[:3]
        return context
