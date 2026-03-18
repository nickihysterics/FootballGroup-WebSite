from django.core.cache import cache
from django.urls import reverse
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.utils.formats import date_format, time_format

from .models import ClubProfile, GalleryItem, Match, NewsPost, Player, Trophy
from .tasks import MATCH_HUB_CACHE_KEY, refresh_match_hub


def absolutize_url(request, url):
    if not url:
        return ""
    if url.startswith(("http://", "https://")) or request is None:
        return url
    return request.build_absolute_uri(url)


def get_club_profile():
    return ClubProfile.objects.order_by("id").first()


def serialize_profile(profile):
    profile = profile or get_club_profile()
    return {
        "name": profile.name if profile else "Футбольная команда Газпром",
        "short_name": profile.short_name if profile else "Газпром Футбол",
        "tagline": profile.tagline if profile else "Матч-дэй, арена и клубный продукт уровня большой команды.",
        "mission": profile.mission if profile else "Клубная платформа строится вокруг следующего матча, домашней арены и медиа-кампании.",
        "city": profile.city if profile else "Санкт-Петербург",
        "stadium": profile.stadium if profile else "Газпром Арена",
        "address": profile.address if profile else "Санкт-Петербург",
        "phone": profile.phone if profile else "+7 (800) 000-00-00",
        "email": profile.email if profile else "team@gazprom-fc.ru",
        "hero_badge": profile.hero_badge if profile else "Газпром футбольная программа",
        "source_name": profile.source_name if profile else "",
        "source_url": profile.source_url if profile else "",
        "stats": {
            "wins": profile.stats_wins if profile else 18,
            "goals": profile.stats_goals if profile else 52,
            "clean_sheets": profile.stats_clean_sheets if profile else 9,
        },
        "links": {
            "ticket_url": profile.ticket_url if profile else "",
            "membership_url": profile.membership_url if profile else "",
            "shop_url": profile.shop_url if profile else "",
            "hospitality_url": profile.hospitality_url if profile else "",
            "video_url": profile.video_url if profile else "",
            "telegram_url": profile.telegram_url if profile else "",
            "vk_url": profile.vk_url if profile else "",
            "admin_url": "/admin/",
        },
    }


def serialize_match(match, request=None):
    if not match:
        return None

    start_at = timezone.localtime(match.start_at)
    return {
        "opponent": match.opponent,
        "competition": match.competition,
        "city": match.city,
        "venue": match.venue,
        "status": match.status,
        "status_label": match.get_status_display(),
        "date_label": date_format(start_at, "j E Y"),
        "short_date_label": date_format(start_at, "d E"),
        "time_label": time_format(start_at, "H:i"),
        "kickoff_iso": start_at.isoformat(),
        "source_url": match.source_url,
        "summary": match.summary,
        "score_for": match.score_for,
        "score_against": match.score_against,
        "result_label": match.result_label,
        "opponent_logo_url": absolutize_url(request, match.opponent_logo_url),
    }


def serialize_player(player, request=None):
    if not player:
        return None

    return {
        "id": player.id,
        "slug": player.slug,
        "full_name": player.full_name,
        "number": player.number,
        "position": player.position,
        "position_label": player.get_position_display(),
        "captain": player.captain,
        "bio": player.bio,
        "achievements": player.achievements,
        "photo_url": absolutize_url(request, player.photo_url),
        "source_url": player.source_url,
        "birth_date": player.birth_date.isoformat() if player.birth_date else "",
        "birth_date_label": date_format(player.birth_date, "j E Y") if player.birth_date else "",
        "age": player.age,
        "place_of_birth": player.place_of_birth,
        "citizenship": player.citizenship,
        "height_cm": player.height_cm,
        "weight_kg": player.weight_kg,
        "previous_club": player.previous_club,
        "matches_for_club": player.matches_for_club,
        "minutes_for_club": player.minutes_for_club,
        "goals_for_club": player.goals_for_club,
        "yellow_cards": player.yellow_cards,
        "red_cards": player.red_cards,
        "speed": player.speed,
        "stamina": player.stamina,
        "technique": player.technique,
        "featured": player.featured,
        "compact_profile": player.compact_profile,
        "initials": player.initials,
    }


def serialize_news(post, request=None):
    if not post:
        return None

    published_at = timezone.localtime(post.published_at)
    return {
        "id": post.id,
        "slug": post.slug,
        "title": post.title,
        "excerpt": post.excerpt,
        "body": post.body,
        "cover_url": absolutize_url(request, post.cover_url),
        "published_at": published_at.isoformat(),
        "published_label": date_format(published_at, "j E Y"),
        "source_name": post.source_name,
        "source_url": post.source_url,
        "featured": post.featured,
    }


def serialize_gallery_item(item, request=None):
    if not item:
        return None

    return {
        "id": item.id,
        "title": item.title,
        "category": item.category,
        "category_label": item.get_category_display(),
        "caption": item.caption,
        "image_url": absolutize_url(request, item.image_url),
        "accent": item.accent,
        "source_name": item.source_name,
        "source_url": item.source_url,
    }


def serialize_trophy(trophy):
    if not trophy:
        return None

    return {
        "title": trophy.title,
        "season": trophy.season,
        "description": trophy.description,
    }


def get_match_hub_payload():
    payload = cache.get(MATCH_HUB_CACHE_KEY)
    if payload is None:
        payload = refresh_match_hub()

    def normalize_start(value):
        if isinstance(value, str):
            parsed = parse_datetime(value)
            if parsed:
                value = parsed
        if value is None:
            return None
        return timezone.localtime(value)

    upcoming = []
    for item in payload.get("upcoming", []):
        start_at = normalize_start(item.get("start_at"))
        upcoming.append(
            {
                "opponent": item.get("opponent", ""),
                "competition": item.get("competition", ""),
                "venue": item.get("venue", ""),
                "city": item.get("city", ""),
                "status": item.get("status", ""),
                "date_label": date_format(start_at, "j E") if start_at else "",
                "time_label": time_format(start_at, "H:i") if start_at else "",
                "kickoff_iso": start_at.isoformat() if start_at else "",
            }
        )

    recent = []
    for item in payload.get("recent", []):
        recent.append(
            {
                "opponent": item.get("opponent", ""),
                "competition": item.get("competition", ""),
                "score_for": item.get("score_for"),
                "score_against": item.get("score_against"),
                "result_label": (
                    f"{item.get('score_for')}:{item.get('score_against')}"
                    if item.get("score_for") is not None and item.get("score_against") is not None
                    else "vs"
                ),
            }
        )

    updated_at = payload.get("updated_at")
    if isinstance(updated_at, str):
        updated_at = parse_datetime(updated_at)
    if updated_at:
        updated_at = timezone.localtime(updated_at)

    return {
        "upcoming": upcoming,
        "recent": recent,
        "updated_at": updated_at.isoformat() if updated_at else "",
        "updated_label": time_format(updated_at, "H:i") if updated_at else "",
    }


def build_site_payload():
    return {"club": serialize_profile(get_club_profile())}


def build_home_payload(request=None):
    now = timezone.now()
    profile = get_club_profile()
    featured_players = list(Player.objects.filter(featured=True).order_by("sort_order", "number")[:4])
    if not featured_players:
        featured_players = list(Player.objects.order_by("sort_order", "number")[:4])
    lineup_players = featured_players[:3]
    featured_news = list(NewsPost.objects.filter(featured=True).order_by("-published_at")[:3])
    if not featured_news:
        featured_news = list(NewsPost.objects.order_by("-published_at")[:3])
    gallery_items = list(GalleryItem.objects.all()[:6])
    next_matches = list(Match.objects.filter(start_at__gte=now).order_by("start_at")[:4])
    featured_match = Match.objects.filter(start_at__gte=now).order_by("-featured", "start_at").first()
    latest_result = Match.objects.filter(status=Match.Status.FINISHED).order_by("-start_at").first()

    return {
        "club": serialize_profile(profile),
        "hero": {
            "featured_match": serialize_match(featured_match, request),
            "latest_result": serialize_match(latest_result, request),
            "featured_players": [serialize_player(player, request) for player in featured_players],
            "lineup_players": [serialize_player(player, request) for player in lineup_players],
            "featured_news": [serialize_news(post, request) for post in featured_news],
            "ticker_news": [serialize_news(post, request) for post in NewsPost.objects.order_by("-published_at")[:4]],
            "gallery_items": [serialize_gallery_item(item, request) for item in gallery_items],
            "next_matches": [serialize_match(match, request) for match in next_matches],
            "trophies": [serialize_trophy(trophy) for trophy in Trophy.objects.all()[:4]],
            "match_hub": get_match_hub_payload(),
        },
    }


def build_team_payload(request=None):
    players = list(Player.objects.order_by("sort_order", "number"))
    return {
        "club": serialize_profile(get_club_profile()),
        "captain": serialize_player(Player.objects.filter(captain=True).first(), request),
        "players": [serialize_player(player, request) for player in players],
        "groups": [
            {
                "key": code,
                "label": label,
                "players": [serialize_player(player, request) for player in players if player.position == code],
            }
            for code, label in Player.Position.choices
        ],
    }


def build_matches_payload(request=None):
    now = timezone.now()
    featured_match = Match.objects.filter(start_at__gte=now).order_by("-featured", "start_at").first()
    if not featured_match:
        featured_match = Match.objects.filter(featured=True).order_by("-start_at").first()
    matches = list(Match.objects.order_by("-featured", "-start_at"))
    return {
        "club": serialize_profile(get_club_profile()),
        "featured_match": serialize_match(featured_match, request),
        "matches": [serialize_match(match, request) for match in matches],
        "match_hub": get_match_hub_payload(),
    }


def build_media_payload(request=None):
    news_items = list(NewsPost.objects.all()[:6])
    gallery_items = list(GalleryItem.objects.all())
    return {
        "club": serialize_profile(get_club_profile()),
        "lead_story": serialize_news(news_items[0], request) if news_items else None,
        "news_items": [serialize_news(post, request) for post in news_items],
        "gallery_items": [serialize_gallery_item(item, request) for item in gallery_items],
    }


def build_contacts_payload(request=None):
    profile = get_club_profile()
    recent_matches = list(Match.objects.filter(status=Match.Status.FINISHED).order_by("-start_at")[:3])
    return {
        "club": serialize_profile(profile),
        "recent_matches": [serialize_match(match, request) for match in recent_matches],
        "channels": [
            {"label": "Telegram", "url": profile.telegram_url if profile else ""},
            {"label": "VK", "url": profile.vk_url if profile else ""},
            {"label": "Видео", "url": profile.video_url if profile else ""},
        ],
    }
