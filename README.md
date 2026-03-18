# Gazprom Football Club Website

Публичный футбольный сайт на схеме `Next.js + Django Admin/API + PostgreSQL + Redis + Celery`.

## Что внутри

- Полноценный React-фронт на `Next.js`: главная, команда, матчи, медиа, контакты
- Django Admin и JSON API для управления игроками, матчами, новостями, трофеями и контактами
- PostgreSQL как основная БД в Docker-стеке
- Redis-кэш и Celery-задача для обновления матч-хаба
- 3D hero на React-стеке: арена и scene-блок внутри `Next.js`
- Реальный reference-layer по `ФК Зенит`: официальный состав, фото, новости и календарь из локального snapshot

## Запуск

```bash
cp .env.example .env
python3 scripts/fetch_zenit_snapshot.py
docker compose up --build
```

Публичный React-фронт будет доступен на `http://127.0.0.1:3000`.

Django backend и API:
- `http://127.0.0.1:8000/admin/`
- `http://127.0.0.1:8000/api/home/`

## Админка

- URL: `http://127.0.0.1:8000/admin/`
- Логин: `admin`
- Пароль: `admin123`

Значения берутся из `.env`, их можно поменять до первого запуска.

## Обновление референсных данных

```bash
python3 scripts/fetch_zenit_snapshot.py
docker compose exec web python manage.py sync_zenit_reference
```

Если нужно заново скачать snapshot напрямую с official сайта из контейнера:

```bash
docker compose exec web python manage.py sync_zenit_reference --refresh
```

## Полезные команды

```bash
docker compose up -d
docker compose logs -f web
docker compose logs -f frontend
docker compose exec web python manage.py createsuperuser
docker compose exec web python manage.py seed_demo
docker compose down
```
