from pathlib import Path

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.db import connection
from django.http import HttpResponse, JsonResponse
from django.urls import include, path

ROBOTS_TXT_PATH = Path(__file__).resolve().parent.parent / "webapp" / "public" / "robots.txt"


def robots_txt(_request):
    try:
        content = ROBOTS_TXT_PATH.read_text(encoding="utf-8")
    except FileNotFoundError:
        content = "User-agent: *\nAllow: /\n"
    return HttpResponse(content, content_type="text/plain; charset=utf-8")


def health(_request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
    except Exception:
        return JsonResponse({"ok": False}, status=503)
    return JsonResponse({"ok": True, "version": "1.0.0"})


urlpatterns = [
    path("health/", health, name="health"),
    path("robots.txt", robots_txt, name="robots-txt"),
    path("admin/", admin.site.urls),
    path("", include("club.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
