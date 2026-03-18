# Gazprom Football Club Website

Публичный футбольный сайт на схеме `Django + React/Vite bundle + PostgreSQL + Redis + Celery`.

## Что внутри

- Django отдаёт публичный сайт, админку и JSON API
- React-приложение собирается через `Vite` в `static/dist` и встраивается в Django-шаблон
- PostgreSQL используется как основная БД в Docker-стеке
- Redis и Celery обновляют матч-хаб и фоновые данные
- В проекте есть reference-layer по `ФК Зенит`: локальный snapshot состава, фото, новостей и календаря

## Запуск

```bash
cp .env.example .env
docker compose up --build -d
```

После запуска доступны:

- публичный сайт: `http://127.0.0.1:8000/`
- админка: `http://127.0.0.1:8000/admin/`
- API: `http://127.0.0.1:8000/api/home/`

Отдельного `frontend`-сервиса нет: публичный интерфейс обслуживается тем же `web`-контейнером.

## Админка

- URL: `http://127.0.0.1:8000/admin/`
- Логин: `admin`
- Пароль: `admin123`

Значения берутся из `.env`, их можно поменять до первого запуска.

## Обновление фронтенд-ассетов

В Docker-режиме `web` сам устанавливает зависимости `webapp` и собирает bundle при старте.

Если нужно пересобрать ассеты вручную:

```bash
docker compose exec -T web npm install --prefix /app/webapp
docker compose exec -T web npm run build --prefix /app/webapp
```

## Обновление референсных данных

```bash
python3 scripts/fetch_zenit_snapshot.py
docker compose exec -T web python manage.py sync_zenit_reference
```

Если нужно заново скачать snapshot из контейнера:

```bash
docker compose exec -T web python manage.py sync_zenit_reference --refresh
```

## Полезные команды

```bash
docker compose up -d
docker compose logs -f web
docker compose logs -f celery
docker compose logs -f celery-beat
docker compose exec -T web python manage.py createsuperuser
docker compose exec -T web python manage.py seed_demo
docker compose down
```
