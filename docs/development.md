# Разработка и проверка

## Окружение

Python 3.11–3.13, Node.js 22.12+ и npm. Из корня проекта с активированным Python-окружением:

```bash
python -m pip install -r requirements-dev.txt
npm ci --prefix webapp
npm run build --prefix webapp
python manage.py collectstatic --noinput
python manage.py check
python manage.py makemigrations --check --dry-run
python -m coverage run manage.py test
python -m coverage report --skip-empty
python -m ruff check .
python -m ruff format --check .
npm test --prefix webapp
```

`collectstatic` нужен перед тестами шаблонов: при `DEBUG=False` используется WhiteNoise manifest storage. Собранный интерфейс включён в Git для быстрого запуска без Node.js; после изменения `webapp/src` обновляйте `static/dist` вместе с исходниками.

## Браузер

```bash
python -m playwright install chromium
python scripts/check_browser.py
```

На Linux: `python -m playwright install --with-deps chromium`. Скрипт сам создаёт временную SQLite-базу, импортирует демо-данные, запускает сервер и завершает его после проверки. Проверяются публичные страницы, прямой профиль игрока, RU/EN, фильтры, мобильное меню и fallback без JavaScript.

Для проверки уже запущенного стенда и обновления иллюстраций:

```bash
python scripts/check_browser.py --base-url http://127.0.0.1:8000 --screenshots
```

Просмотрите четыре PNG в `docs/screenshots` перед коммитом. Скриншоты снимаются в режиме уменьшенной анимации. Шрифты собраны локально из Fontsource.

## Зависимости

- `requirements.in` описывает прямые зависимости; `requirements.txt` закрепляет также транзитивные версии для поддерживаемых платформ.
- Обновление Python-lock: `uv pip compile --universal requirements.in -o requirements.txt`.
- `webapp/package-lock.json` фиксирует npm-дерево; используйте `npm ci` для чистой установки.
- Проверка npm: `npm audit --prefix webapp`.
- Проверка Python: `pip-audit -r requirements.txt` после отдельной установки `pip-audit`.

Результат аудита зависит от даты базы уязвимостей; зелёный CI не означает пожизненную безопасность зависимостей.

## Docker

```bash
python scripts/setup_demo.py
docker compose up --build --wait
docker compose exec -T web python manage.py check
docker compose exec -T -e REDIS_URL= web python manage.py test
```

Последняя команда выполняет тесты на отдельной PostgreSQL-базе и отключает общий Redis-кэш внутри тестового процесса. Обычная база сайта сохраняется в именованном томе.

```bash
docker compose exec -T web python manage.py shell -c "from club.tasks import refresh_match_hub; print(refresh_match_hub.delay().get(timeout=30))"
```

Эта команда проверяет очередь Celery и обновление матч-хаба. Задача не загружает внешние футбольные данные.

## CI

Сервер проверяется на Linux/Python 3.11, Windows/Python 3.12, macOS/Python 3.13. Отдельные задания проверяют npm-сборку и браузер, а также полный Docker-стек с PostgreSQL, Redis и задачей Celery. Штатный запуск не создаёт администратора с предустановленным паролем.

## Диагностика

| Симптом | Решение |
| --- | --- |
| `Missing staticfiles manifest entry` | Собрать frontend и выполнить `collectstatic` |
| Изменения JSX не видны | Выполнить `npm run build --prefix webapp`, обновить страницу |
| `.env` отсутствует | Запустить `python scripts/setup_demo.py`; существующий файл сохраняется |
| Docker-порт занят | Задать `FOOTBALL_PORT=8001` в `.env` и перезапустить Compose |
| Нет новых данных после импорта | Проверить выбранный режим импорта и кэш; обновить вкладку |
| Старый матч не имеет счёта | Это состояние архивного снимка, приложение не получает актуальные результаты |
| Не видны новые медиа в Docker | Проверить загрузку через админку и том `/app/media` |

Compose предназначен для локальной демонстрации и публикует только HTTP-порт на 127.0.0.1. Для собственного внешнего сервера отдельно настройте домен, TLS, защищённые cookies, резервное копирование и доступ к админке. GitHub хранит исходники; GitHub Pages не исполняет Django.
