#!/bin/sh
set -e

if [ -n "$POSTGRES_DB" ]; then
  python - <<'PY'
import os
import time

import psycopg

dsn = {
    "dbname": os.environ["POSTGRES_DB"],
    "user": os.environ["POSTGRES_USER"],
    "password": os.environ["POSTGRES_PASSWORD"],
    "host": os.environ.get("POSTGRES_HOST", "db"),
    "port": os.environ.get("POSTGRES_PORT", "5432"),
}

for attempt in range(30):
    try:
        with psycopg.connect(**dsn):
            break
    except psycopg.OperationalError:
        if attempt == 29:
            raise
        time.sleep(1)
PY
fi

if [ "$DJANGO_RUN_BOOTSTRAP" = "1" ]; then
  if [ -f /app/frontend/package.json ]; then
    if [ ! -d /app/frontend/node_modules/react ]; then
      if [ -f /app/frontend/package-lock.json ]; then
        npm ci --prefix /app/frontend
      else
        npm install --prefix /app/frontend
      fi
    fi

    npm run build --prefix /app/frontend
  fi

  python manage.py migrate --noinput
  python manage.py collectstatic --noinput

  if [ "$DJANGO_SEED_DEMO" = "1" ]; then
    python manage.py seed_demo
  fi

  if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_EMAIL" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); import os; User.objects.filter(username=os.environ['DJANGO_SUPERUSER_USERNAME']).exists() or User.objects.create_superuser(os.environ['DJANGO_SUPERUSER_USERNAME'], os.environ['DJANGO_SUPERUSER_EMAIL'], os.environ['DJANGO_SUPERUSER_PASSWORD'])"
  fi
fi

exec "$@"
