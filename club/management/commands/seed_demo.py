from django.core.management import call_command
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Заполняет проект реальными данными «Зенита» в визуальной подаче Газпрома."

    def handle(self, *args, **options):
        call_command("sync_zenit_reference")
