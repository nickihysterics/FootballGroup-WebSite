FROM node:22-alpine AS frontend
WORKDIR /src/webapp
COPY webapp/package*.json ./
RUN npm ci
COPY webapp/ ./
RUN npm run build

FROM python:3.12-slim
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1
WORKDIR /app
RUN useradd --uid 10001 --create-home football
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY config/ ./config/
COPY club/ ./club/
COPY templates/ ./templates/
COPY data/ ./data/
COPY manage.py entrypoint.sh ./
COPY webapp/public/ ./webapp/public/
COPY --from=frontend /src/static/dist/ ./static/dist/
RUN python manage.py collectstatic --noinput \
    && mkdir -p /app/media \
    && chown -R football:football /app/media \
    && chmod +x /app/entrypoint.sh
USER football
EXPOSE 8000
HEALTHCHECK --interval=15s --timeout=5s --start-period=40s CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/health/', timeout=4)"
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "2"]
