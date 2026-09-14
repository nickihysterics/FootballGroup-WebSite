"""Проверяет публичные страницы; может использовать уже запущенный сервер."""

import argparse
import os
import socket
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

from playwright.sync_api import expect, sync_playwright

ROOT = Path(__file__).resolve().parents[1]


def check(url, screenshots=False):
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        page = browser.new_page(
            viewport={"width": 1440, "height": 1050}, reduced_motion="reduce", locale="ru-RU"
        )
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        for route, name in [
            ("/", "home"),
            ("/team/", "team"),
            ("/matches/", "matches"),
            ("/media/", "media"),
            ("/contacts/", "contacts"),
        ]:
            response = page.goto(url + route)
            assert response.status == 200, route
            expect(page.locator("#app-boot-splash")).to_have_count(0)
            expect(page.locator("main h1").first).to_be_visible()
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), route
            if screenshots and name in {"home", "team", "matches"}:
                page.screenshot(
                    path=str(ROOT / f"docs/screenshots/{name}-desktop.png"), full_page=False
                )
        page.goto(url + "/team/")
        player = page.locator('main a[href^="/team/"]').first
        expect(player).to_be_visible()
        player_path = player.get_attribute("href")
        player.click()
        expect(page.locator("main h1").first).to_be_visible()
        assert page.reload().status == 200
        assert page.url.endswith(player_path)
        page.get_by_role("button", name="Переключить язык на английский").click()
        expect(
            page.get_by_text("Educational demo · archived data · unofficial website")
        ).to_be_visible()
        page.reload()
        expect(
            page.get_by_text("Educational demo · archived data · unofficial website")
        ).to_be_visible()
        page.get_by_role("button", name="Switch language to Russian").click()
        expect(
            page.get_by_text("Учебная демонстрация · архивные данные · неофициальный сайт")
        ).to_be_visible()
        page.goto(url + "/matches/")
        selector = page.locator('button[aria-haspopup="listbox"]').first
        selector.click()
        expect(page.get_by_role("listbox")).to_be_visible()
        page.get_by_role("option").last.click()
        expect(page.get_by_role("listbox")).to_have_count(0)
        page.set_viewport_size({"width": 390, "height": 844})
        page.goto(url)
        expect(page.locator("#app-boot-splash")).to_have_count(0)
        expect(page.locator("main h1").first).to_be_visible()
        page.get_by_role("button", name="Открыть меню").click()
        expect(page.get_by_role("button", name="Закрыть меню")).to_be_visible()
        page.get_by_role("button", name="Закрыть меню").click()
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
        if screenshots:
            page.screenshot(path=str(ROOT / "docs/screenshots/home-mobile.png"), full_page=False)
        nojs = browser.new_page(java_script_enabled=False)
        assert nojs.goto(url).status == 200
        expect(nojs.get_by_text("Главная", exact=True).first).to_be_visible()
        expect(nojs.locator("#app-boot-splash")).not_to_be_visible()
        assert not errors, errors
        browser.close()
    print("Browser OK: routes, player reload, RU/EN, filters, mobile menu, no-JS fallback")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url")
    parser.add_argument("--screenshots", action="store_true")
    args = parser.parse_args()
    if args.base_url:
        check(args.base_url.rstrip("/"), args.screenshots)
        return
    with tempfile.TemporaryDirectory(prefix="football-check-") as temp:
        env = {
            **os.environ,
            "SQLITE_PATH": str(Path(temp) / "db.sqlite3"),
            "DJANGO_DEBUG": "True",
            "PYTHONIOENCODING": "utf-8",
        }
        for command in (["migrate", "--noinput"], ["seed_demo"]):
            subprocess.run(
                [sys.executable, "manage.py", *command],
                cwd=ROOT,
                env=env,
                check=True,
                stdout=subprocess.DEVNULL,
            )
        with socket.socket() as sock:
            sock.bind(("127.0.0.1", 0))
            port = sock.getsockname()[1]
        url = f"http://127.0.0.1:{port}"
        server = subprocess.Popen(
            [sys.executable, "manage.py", "runserver", f"127.0.0.1:{port}", "--noreload"],
            cwd=ROOT,
            env=env,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        try:
            for _ in range(150):
                try:
                    with urllib.request.urlopen(url + "/health/", timeout=1):
                        break
                except OSError:
                    if server.poll() is not None:
                        raise RuntimeError("Server exited") from None
                    time.sleep(0.1)
            else:
                raise RuntimeError("Server did not start")
            check(url, args.screenshots)
        finally:
            server.terminate()
            try:
                server.wait(timeout=10)
            except subprocess.TimeoutExpired:
                server.kill()
                server.wait()


if __name__ == "__main__":
    main()
