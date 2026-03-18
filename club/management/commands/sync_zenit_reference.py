from django.core.management.base import BaseCommand

from club.services.zenit_reference import sync_reference_data


class Command(BaseCommand):
    help = "Импортирует актуальные состав, новости и календарь «Зенита» из официальных материалов клуба."

    def add_arguments(self, parser):
        parser.add_argument(
            "--keep-existing",
            action="store_true",
            help="Не очищать существующий контент перед импортом.",
        )
        parser.add_argument(
            "--refresh",
            action="store_true",
            help="Обновить локальный snapshot с официального сайта перед импортом.",
        )

    def handle(self, *args, **options):
        summary = sync_reference_data(replace=not options["keep_existing"], refresh=options["refresh"])
        self.stdout.write(
            self.style.SUCCESS(
                f"Импорт завершён: players={summary.players}, matches={summary.matches}, "
                f"news={summary.news}, gallery={summary.gallery_items}"
            )
        )
