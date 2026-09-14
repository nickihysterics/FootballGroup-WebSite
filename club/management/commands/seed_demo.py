from django.core.management import call_command
from django.core.management.base import BaseCommand

from club.models import ClubProfile, GalleryItem, Match, NewsPost, Player, Trophy


class Command(BaseCommand):
    help = "Заполняет только пустой проект демонстрационными данными."

    def handle(self, *args, **options):
        if any(
            model.objects.exists()
            for model in (ClubProfile, Player, Match, NewsPost, GalleryItem, Trophy)
        ):
            self.stdout.write("Existing content preserved; demo import skipped.")
            return
        call_command("sync_reference_snapshot")
