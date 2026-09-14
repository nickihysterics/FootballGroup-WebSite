"""Создаёт отдельные локальные секреты для Docker, не перезаписывая .env."""

import secrets
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    target = ROOT / ".env"
    if target.exists():
        print("Existing .env preserved.")
        return
    content = (ROOT / ".env.example").read_text(encoding="utf-8")
    content = content.replace("generate-django-secret", secrets.token_urlsafe(48))
    content = content.replace("generate-postgres-password", secrets.token_urlsafe(24))
    with target.open("x", encoding="utf-8") as file:
        file.write(content)
    target.chmod(0o600)
    print("Created .env with local secrets. Admin is created separately.")


if __name__ == "__main__":
    main()
