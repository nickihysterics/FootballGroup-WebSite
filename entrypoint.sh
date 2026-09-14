#!/bin/sh
set -eu

if [ "${DJANGO_RUN_BOOTSTRAP:-0}" = "1" ]; then
  python manage.py migrate --noinput
  if [ "${DJANGO_SEED_DEMO:-0}" = "1" ]; then
    python manage.py seed_demo
  fi
fi

exec "$@"
