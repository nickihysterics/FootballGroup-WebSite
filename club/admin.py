from django.contrib import admin
from django.utils.html import format_html

from .models import ClubProfile, GalleryItem, Match, NewsPost, Player, Trophy

admin.site.site_header = "Gazprom FC Admin"
admin.site.site_title = "Gazprom FC"
admin.site.index_title = "Управление клубным сайтом"


@admin.register(ClubProfile)
class ClubProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "city", "stadium", "updated_at")
    fieldsets = (
        ("Бренд", {"fields": ("name", "short_name", "tagline", "mission", "hero_badge")}),
        ("Локация и контакты", {"fields": ("city", "stadium", "address", "phone", "email", "telegram_url", "vk_url")}),
        ("Коммерческие ссылки", {"fields": ("ticket_url", "membership_url", "shop_url", "hospitality_url", "video_url")}),
        ("Цифры", {"fields": ("stats_wins", "stats_goals", "stats_clean_sheets")}),
        ("Источник", {"fields": ("source_name", "source_url")}),
    )


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ("photo_preview", "full_name", "number", "position", "citizenship", "matches_for_club", "goals_for_club", "captain", "featured")
    list_filter = ("position", "captain", "featured", "citizenship")
    list_editable = ("featured",)
    search_fields = ("full_name", "hometown", "achievements", "citizenship", "previous_club")
    prepopulated_fields = {"slug": ("full_name",)}
    readonly_fields = ("photo_preview_large", "source_link")
    ordering = ("sort_order", "number", "full_name")
    fieldsets = (
        ("Карточка", {"fields": ("full_name", "slug", "number", "position", "captain", "featured", "sort_order")}),
        ("Фото и источник", {"fields": ("photo", "remote_photo_url", "photo_preview_large", "source_url", "source_link")}),
        ("Профиль", {"fields": ("bio", "achievements", "hometown", "place_of_birth", "citizenship", "birth_date", "age", "previous_club")}),
        ("Физика", {"fields": ("height_cm", "weight_kg")}),
        ("Статистика", {"fields": ("matches_for_club", "minutes_for_club", "goals_for_club", "yellow_cards", "red_cards")}),
        ("Визуальные индикаторы", {"classes": ("collapse",), "fields": ("speed", "stamina", "technique")}),
    )

    @admin.display(description="Фото")
    def photo_preview(self, obj):
        if obj.photo_url:
            return format_html('<img src="{}" style="width:42px;height:42px;object-fit:cover;border-radius:10px;" alt="{}">', obj.photo_url, obj.full_name)
        return "—"

    @admin.display(description="Превью")
    def photo_preview_large(self, obj):
        if obj.photo_url:
            return format_html('<img src="{}" style="width:180px;height:180px;object-fit:cover;border-radius:18px;" alt="{}">', obj.photo_url, obj.full_name)
        return "Фото не задано"

    @admin.display(description="Источник")
    def source_link(self, obj):
        if obj.source_url:
            return format_html('<a href="{}" target="_blank" rel="noreferrer">Открыть страницу игрока</a>', obj.source_url)
        return "—"


@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ("opponent", "competition", "start_at", "status", "featured")
    list_filter = ("status", "competition", "featured")
    search_fields = ("opponent", "competition", "city", "venue")
    date_hierarchy = "start_at"
    readonly_fields = ("source_link",)
    fieldsets = (
        ("Матч", {"fields": ("opponent", "competition", "start_at", "status", "featured")}),
        ("Локация", {"fields": ("venue", "city", "opponent_logo_url")}),
        ("Счёт и описание", {"fields": ("score_for", "score_against", "summary")}),
        ("Источник", {"fields": ("source_url", "source_link")}),
    )

    @admin.display(description="Источник")
    def source_link(self, obj):
        if obj.source_url:
            return format_html('<a href="{}" target="_blank" rel="noreferrer">Открыть матч</a>', obj.source_url)
        return "—"


@admin.register(NewsPost)
class NewsPostAdmin(admin.ModelAdmin):
    list_display = ("cover_preview", "title", "published_at", "featured")
    list_filter = ("featured",)
    search_fields = ("title", "excerpt", "body")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("cover_preview_large", "source_link")
    fieldsets = (
        ("Публикация", {"fields": ("title", "slug", "published_at", "featured")}),
        ("Контент", {"fields": ("excerpt", "body")}),
        ("Обложка", {"fields": ("cover", "remote_cover_url", "cover_preview_large")}),
        ("Источник", {"fields": ("source_name", "source_url", "source_link")}),
    )

    @admin.display(description="Cover")
    def cover_preview(self, obj):
        if obj.cover_url:
            return format_html('<img src="{}" style="width:64px;height:42px;object-fit:cover;border-radius:8px;" alt="{}">', obj.cover_url, obj.title)
        return "—"

    @admin.display(description="Обложка")
    def cover_preview_large(self, obj):
        if obj.cover_url:
            return format_html('<img src="{}" style="width:240px;height:140px;object-fit:cover;border-radius:16px;" alt="{}">', obj.cover_url, obj.title)
        return "Обложка не задана"

    @admin.display(description="Источник")
    def source_link(self, obj):
        if obj.source_url:
            return format_html('<a href="{}" target="_blank" rel="noreferrer">Открыть публикацию</a>', obj.source_url)
        return "—"


@admin.register(Trophy)
class TrophyAdmin(admin.ModelAdmin):
    list_display = ("title", "season", "description")
    search_fields = ("title", "season", "description")


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ("image_preview", "title", "category", "accent")
    list_filter = ("category",)
    search_fields = ("title", "caption", "accent")
    readonly_fields = ("image_preview_large", "source_link")
    fieldsets = (
        ("Карточка", {"fields": ("title", "category", "accent", "caption")}),
        ("Изображение", {"fields": ("image", "remote_image_url", "image_preview_large")}),
        ("Источник", {"fields": ("source_name", "source_url", "source_link")}),
    )

    @admin.display(description="Фото")
    def image_preview(self, obj):
        if obj.image_url:
            return format_html('<img src="{}" style="width:64px;height:42px;object-fit:cover;border-radius:8px;" alt="{}">', obj.image_url, obj.title)
        return "—"

    @admin.display(description="Превью")
    def image_preview_large(self, obj):
        if obj.image_url:
            return format_html('<img src="{}" style="width:240px;height:140px;object-fit:cover;border-radius:16px;" alt="{}">', obj.image_url, obj.title)
        return "Изображение не задано"

    @admin.display(description="Источник")
    def source_link(self, obj):
        if obj.source_url:
            return format_html('<a href="{}" target="_blank" rel="noreferrer">Открыть источник</a>', obj.source_url)
        return "—"
