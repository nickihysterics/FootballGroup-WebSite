from django.db import models
from django.utils.text import slugify


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class ClubProfile(TimestampedModel):
    name = models.CharField("Название клуба", max_length=200)
    short_name = models.CharField("Короткое имя", max_length=80, default="Газпром Футбол")
    tagline = models.CharField("Слоган", max_length=255)
    mission = models.TextField("Описание клуба")
    city = models.CharField("Город", max_length=120)
    stadium = models.CharField("Стадион", max_length=120)
    address = models.CharField("Адрес", max_length=255)
    phone = models.CharField("Телефон", max_length=50)
    email = models.EmailField("Email")
    telegram_url = models.URLField("Telegram", blank=True)
    vk_url = models.URLField("VK", blank=True)
    ticket_url = models.URLField("Билеты", blank=True)
    membership_url = models.URLField("Абонементы", blank=True)
    shop_url = models.URLField("Магазин", blank=True)
    hospitality_url = models.URLField("Hospitality", blank=True)
    video_url = models.URLField("Видео", blank=True)
    hero_badge = models.CharField("Подпись hero", max_length=120, default="Газпром футбольная программа")
    stats_wins = models.PositiveIntegerField("Победы за сезон", default=18)
    stats_goals = models.PositiveIntegerField("Голы", default=52)
    stats_clean_sheets = models.PositiveIntegerField("Матчи на ноль", default=9)
    source_name = models.CharField("Источник данных", max_length=120, blank=True)
    source_url = models.URLField("URL источника", blank=True)

    class Meta:
        verbose_name = "Профиль клуба"
        verbose_name_plural = "Профиль клуба"

    def __str__(self) -> str:
        return self.name


class Player(TimestampedModel):
    class Position(models.TextChoices):
        GOALKEEPER = "GK", "Вратарь"
        DEFENDER = "DF", "Защитник"
        MIDFIELDER = "MF", "Полузащитник"
        FORWARD = "FW", "Нападающий"

    full_name = models.CharField("Имя", max_length=160)
    slug = models.SlugField(max_length=180, unique=True, blank=True)
    number = models.PositiveIntegerField("Номер")
    position = models.CharField("Позиция", max_length=2, choices=Position.choices)
    captain = models.BooleanField("Капитан", default=False)
    hometown = models.CharField("Город", max_length=120, blank=True)
    bio = models.TextField("Профиль игрока", blank=True)
    achievements = models.CharField("Достижения", max_length=255, blank=True)
    photo = models.ImageField("Фото", upload_to="players/", blank=True)
    remote_photo_url = models.URLField("Внешнее фото", blank=True)
    source_url = models.URLField("Источник игрока", blank=True)
    birth_date = models.DateField("Дата рождения", blank=True, null=True)
    age = models.PositiveIntegerField("Возраст", blank=True, null=True)
    place_of_birth = models.CharField("Место рождения", max_length=160, blank=True)
    citizenship = models.CharField("Гражданство", max_length=120, blank=True)
    height_cm = models.PositiveIntegerField("Рост (см)", blank=True, null=True)
    weight_kg = models.PositiveIntegerField("Вес (кг)", blank=True, null=True)
    previous_club = models.CharField("Предыдущий клуб", max_length=160, blank=True)
    matches_for_club = models.PositiveIntegerField("Матчи за клуб", default=0)
    minutes_for_club = models.PositiveIntegerField("Минуты за клуб", default=0)
    goals_for_club = models.PositiveIntegerField("Голы за клуб", default=0)
    yellow_cards = models.PositiveIntegerField("Жёлтые карточки", default=0)
    red_cards = models.PositiveIntegerField("Красные карточки", default=0)
    speed = models.PositiveIntegerField(default=80)
    stamina = models.PositiveIntegerField(default=80)
    technique = models.PositiveIntegerField(default=80)
    featured = models.BooleanField("Показывать на главной", default=False)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "number", "full_name"]
        verbose_name = "Игрок"
        verbose_name_plural = "Игроки"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.full_name, allow_unicode=True)
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f"#{self.number} {self.full_name}"

    @property
    def initials(self) -> str:
        parts = self.full_name.split()
        return "".join(part[0] for part in parts[:2]).upper()

    @property
    def photo_url(self) -> str:
        if self.photo:
            return self.photo.url
        return self.remote_photo_url

    @property
    def compact_profile(self) -> str:
        bits = [self.citizenship]
        if self.height_cm:
            bits.append(f"{self.height_cm} см")
        if self.weight_kg:
            bits.append(f"{self.weight_kg} кг")
        return " · ".join(bit for bit in bits if bit)


class Match(TimestampedModel):
    class Status(models.TextChoices):
        UPCOMING = "upcoming", "Скоро"
        LIVE = "live", "В эфире"
        FINISHED = "finished", "Завершен"

    opponent = models.CharField("Соперник", max_length=160)
    competition = models.CharField("Турнир", max_length=160)
    start_at = models.DateTimeField("Дата матча")
    venue = models.CharField("Площадка", max_length=160)
    city = models.CharField("Город", max_length=120, blank=True)
    status = models.CharField(max_length=12, choices=Status.choices, default=Status.UPCOMING)
    score_for = models.PositiveIntegerField("Голы команды", blank=True, null=True)
    score_against = models.PositiveIntegerField("Голы соперника", blank=True, null=True)
    summary = models.TextField("Краткий обзор", blank=True)
    featured = models.BooleanField("Выделить", default=False)
    source_url = models.URLField("Источник матча", blank=True)
    opponent_logo_url = models.URLField("Лого соперника", blank=True)

    class Meta:
        ordering = ["start_at"]
        verbose_name = "Матч"
        verbose_name_plural = "Матчи"

    def __str__(self) -> str:
        return f"Матч против {self.opponent}"

    @property
    def result_label(self) -> str:
        if self.score_for is None or self.score_against is None:
            return "vs"
        return f"{self.score_for}:{self.score_against}"


class NewsPost(TimestampedModel):
    title = models.CharField("Заголовок", max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    excerpt = models.CharField("Краткое описание", max_length=255)
    body = models.TextField("Текст", blank=True)
    cover = models.ImageField("Обложка", upload_to="news/", blank=True)
    remote_cover_url = models.URLField("Внешняя обложка", blank=True)
    published_at = models.DateTimeField("Дата публикации")
    featured = models.BooleanField("Показывать на главной", default=False)
    source_name = models.CharField("Источник", max_length=120, blank=True)
    source_url = models.URLField("URL источника", blank=True)

    class Meta:
        ordering = ["-published_at"]
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title, allow_unicode=True)
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title

    @property
    def cover_url(self) -> str:
        if self.cover:
            return self.cover.url
        return self.remote_cover_url


class Trophy(TimestampedModel):
    title = models.CharField("Трофей", max_length=160)
    season = models.CharField("Сезон", max_length=50)
    description = models.CharField("Описание", max_length=255)

    class Meta:
        ordering = ["-season", "title"]
        verbose_name = "Трофей"
        verbose_name_plural = "Трофеи"

    def __str__(self) -> str:
        return f"{self.title} {self.season}"


class GalleryItem(TimestampedModel):
    class Category(models.TextChoices):
        MATCHDAY = "matchday", "Матч-дэй"
        TRAINING = "training", "Тренировка"
        COMMUNITY = "community", "Сообщество"

    title = models.CharField("Название", max_length=160)
    category = models.CharField(max_length=20, choices=Category.choices)
    caption = models.CharField("Подпись", max_length=255)
    image = models.ImageField("Изображение", upload_to="gallery/", blank=True)
    remote_image_url = models.URLField("Внешнее изображение", blank=True)
    accent = models.CharField("Акцентный текст", max_length=80, blank=True)
    source_name = models.CharField("Источник", max_length=120, blank=True)
    source_url = models.URLField("URL источника", blank=True)

    class Meta:
        verbose_name = "Медиа-элемент"
        verbose_name_plural = "Медиа-элементы"

    def __str__(self) -> str:
        return self.title

    @property
    def image_url(self) -> str:
        if self.image:
            return self.image.url
        return self.remote_image_url
