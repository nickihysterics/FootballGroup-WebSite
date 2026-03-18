from django.core.cache import cache
from django.utils import timezone

from celery import shared_task

from .models import Match


MATCH_HUB_CACHE_KEY = "club:match_hub"


@shared_task
def refresh_match_hub():
    now = timezone.now()
    upcoming = list(
        Match.objects.filter(start_at__gte=now)
        .order_by("start_at")
        .values("opponent", "competition", "start_at", "venue", "city", "status")[:3]
    )
    recent = list(
        Match.objects.filter(status=Match.Status.FINISHED)
        .order_by("-start_at")
        .values("opponent", "score_for", "score_against", "competition")[:3]
    )
    payload = {
        "upcoming": upcoming,
        "recent": recent,
        "updated_at": now.isoformat(),
    }
    cache.set(MATCH_HUB_CACHE_KEY, payload, timeout=60 * 15)
    return payload

