from django.db.utils import OperationalError, ProgrammingError

from .models import ClubProfile


def site_context(_request):
    try:
        club_profile = ClubProfile.objects.order_by("id").first()
    except (OperationalError, ProgrammingError):
        club_profile = None
    return {"club_profile": club_profile}
