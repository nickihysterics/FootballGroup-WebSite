from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from html import unescape
import json
from pathlib import Path
import time
from zoneinfo import ZoneInfo
import re
from urllib.parse import urljoin
from urllib.request import Request, urlopen

from django.core.cache import cache
from django.utils import timezone

from club.localized_content import (
    localize_competition as translate_competition,
    localize_country,
    localize_opponent as translate_opponent,
    localize_place,
    localize_player_name,
    localize_previous_club,
    localize_source_name,
    localize_story_body,
    localize_story_excerpt,
    localize_story_title,
    localize_trophy_description,
    localize_trophy_title,
    localize_venue as translate_venue,
)
from club.models import ClubProfile, GalleryItem, Match, NewsPost, Player, Trophy
from club.tasks import MATCH_HUB_CACHE_KEY


BASE_URL = "https://en.fc-zenit.ru"
RU_BASE_URL = "https://fc-zenit.ru"
SQUAD_URL = f"{BASE_URL}/zenit/players/"
NEWS_URL = f"{BASE_URL}/news/"
SCHEDULE_URL = f"{BASE_URL}/zenit/calendar/"
CLUB_SOURCE_URL = "https://en.fc-zenit.ru/zenit/players/"
MOSCOW_TZ = ZoneInfo("Europe/Moscow")
SNAPSHOT_PATH = Path(__file__).resolve().parents[2] / "data" / "zenit_reference.json"

FEATURED_PLAYERS = {
    "Douglas Santos",
    "Wendel",
    "Maksim Glushenkov",
    "Aleksandr Sobolev",
}
CAPTAIN_NAME = "Douglas Santos"
POSITION_GROUPS = {
    "Goalkeepers": Player.Position.GOALKEEPER,
    "Defenders": Player.Position.DEFENDER,
    "Midfielders": Player.Position.MIDFIELDER,
    "Forwards": Player.Position.FORWARD,
}
POSITION_LABELS = {
    "Goalkeeper": Player.Position.GOALKEEPER,
    "Defender": Player.Position.DEFENDER,
    "Midfielder": Player.Position.MIDFIELDER,
    "Forward": Player.Position.FORWARD,
}
POSITION_NAMES_RU = {
    "Goalkeeper": "вратарь",
    "Defender": "защитник",
    "Midfielder": "полузащитник",
    "Forward": "нападающий",
}
POSITION_NAMES_EN = {
    "Goalkeeper": "goalkeeper",
    "Defender": "defender",
    "Midfielder": "midfielder",
    "Forward": "forward",
}
MONTHS = {
    "january": 1,
    "february": 2,
    "march": 3,
    "april": 4,
    "may": 5,
    "june": 6,
    "july": 7,
    "august": 8,
    "september": 9,
    "october": 10,
    "november": 11,
    "december": 12,
}
TROPHIES = [
    {
        "title": "Российская Премьер-Лига",
        "title_ru": "Российская Премьер-Лига",
        "title_en": "Russian Premier Liga",
        "season": "2023/24",
        "description": "Чемпион России по итогам сезона.",
        "description_ru": "Чемпион России по итогам сезона.",
        "description_en": "Champions of Russia at the end of the season.",
    },
    {
        "title": "Суперкубок России",
        "title_ru": "Суперкубок России",
        "title_en": "Russian Super Cup",
        "season": "2024",
        "description": "Победа в матче за Суперкубок России.",
        "description_ru": "Победа в матче за Суперкубок России.",
        "description_en": "Victory in the Russian Super Cup match.",
    },
    {
        "title": "Кубок УЕФА",
        "title_ru": "Кубок УЕФА",
        "title_en": "UEFA Cup",
        "season": "2007/08",
        "description": "Европейский трофей клуба на международной арене.",
        "description_ru": "Европейский трофей клуба на международной арене.",
        "description_en": "The club's European trophy on the international stage.",
    },
    {
        "title": "Суперкубок УЕФА",
        "title_ru": "Суперкубок УЕФА",
        "title_en": "UEFA Super Cup",
        "season": "2008",
        "description": "Победа над обладателем Лиги чемпионов в матче за Суперкубок УЕФА.",
        "description_ru": "Победа над обладателем Лиги чемпионов в матче за Суперкубок УЕФА.",
        "description_en": "Victory over the reigning Champions League winners in the UEFA Super Cup match.",
    },
]


@dataclass
class ImportSummary:
    players: int = 0
    matches: int = 0
    news: int = 0
    gallery_items: int = 0


def fetch_html(url: str) -> str:
    request = Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36"
            ),
            "Accept-Language": "en-US,en;q=0.9,ru;q=0.8",
        },
    )
    last_error = None
    for attempt in range(3):
        try:
            with urlopen(request, timeout=60) as response:
                return response.read().decode("utf-8", "ignore")
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            if attempt == 2:
                raise
            time.sleep(1.5 * (attempt + 1))
    raise last_error


def clean_text(raw: str) -> str:
    value = re.sub(r"<br\s*/?>", " ", raw, flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    value = unescape(value)
    return re.sub(r"\s+", " ", value).strip()


def clean_news_title(raw: str) -> str:
    value = clean_text(raw)
    value = re.sub(r"\s+\d{1,2}\s+[A-Za-z]+\s+\d{2}:\d{2}\s+New$", "", value)
    value = re.sub(r"\s+\d{1,2}\s+[A-Za-z]+\s+\d{2}:\d{2}$", "", value)
    return value.strip(" -")


def absolute_url(url: str, base_url: str = BASE_URL) -> str:
    return urljoin(base_url, url)


def parse_int(raw: str | None) -> int | None:
    if not raw:
        return None
    digits = re.search(r"(\d+)", raw)
    return int(digits.group(1)) if digits else None


def pluralize_ru(value: int, forms: tuple[str, str, str]) -> str:
    remainder_hundred = value % 100
    remainder_ten = value % 10
    if 10 < remainder_hundred < 20:
        return forms[2]
    if remainder_ten == 1:
        return forms[0]
    if 1 < remainder_ten < 5:
        return forms[1]
    return forms[2]


def parse_birth_date(raw: str | None):
    if not raw:
        return None
    match = re.search(r"(\d{2})\.(\d{2})\.(\d{4})", raw)
    if not match:
        return None
    day, month, year = map(int, match.groups())
    return datetime(year, month, day).date()


def parse_schedule_datetime(month_label: str, day_label: str, time_label: str):
    parts = month_label.split()
    if not parts or not parts[-1].isdigit():
        return None
    year = int(parts[-1])
    date_match = re.search(r"(\d{2})\s+([a-z]+)", day_label.lower())
    if not date_match:
        return None
    day = int(date_match.group(1))
    month = MONTHS.get(date_match.group(2))
    if month is None:
        return None
    if ":" not in time_label:
        return None
    hour, minute = map(int, time_label.split(":"))
    return timezone.make_aware(datetime(year, month, day, hour, minute), MOSCOW_TZ)


def parse_squad():
    html = fetch_html(SQUAD_URL)
    current_position = None
    players = []
    seen = set()
    for block in re.findall(r"<li class=\"composition__item\">(.*?)</li>", html, re.S):
        title_match = re.search(r"composition__title\">(.*?)</div>", block, re.S)
        if title_match:
            current_position = POSITION_GROUPS.get(clean_text(title_match.group(1)))
            continue
        player_match = re.search(
            r"<a href=\"([^\"]+)\" title=\"([^\"]+)\">\s*<span class=\"composition__number\">(\d+)</span>",
            block,
            re.S,
        )
        if not player_match or player_match.group(1) in seen:
            continue
        seen.add(player_match.group(1))
        players.append(
            {
                "url": absolute_url(player_match.group(1)),
                "full_name": clean_text(player_match.group(2)),
                "number": int(player_match.group(3)),
                "position": current_position or Player.Position.MIDFIELDER,
            }
        )
    return players


def build_player_bios(name_ru: str, name_en: str, row_map: dict[str, str], stat_map: dict[str, int]) -> tuple[str, str]:
    position_ru = POSITION_NAMES_RU.get(row_map.get("Position", ""), "игрок")
    position_en = POSITION_NAMES_EN.get(row_map.get("Position", ""), "player")
    birth = row_map.get("Was born")
    birthplace_en = localize_place(row_map.get("Place of Birth", ""), "en")
    birthplace_ru = localize_place(birthplace_en, "ru")
    citizenship_en = localize_country(row_map.get("Citizenship", ""), "en")
    citizenship_ru = localize_country(citizenship_en, "ru")
    matches = stat_map.get('Matches for "Zenit"', 0)
    minutes = stat_map.get('Minutes for "Zenit"', 0)
    goals = stat_map.get("Scored goals", 0)

    bits_ru = [f"{name_ru} — {position_ru} «Зенита»."]
    if birth or birthplace_en:
        birth_part = "Родился"
        if birth:
            birth_part += f" {birth}"
        if birthplace_ru:
            birth_part += f" в {birthplace_ru}"
        bits_ru.append(f"{birth_part}.")
    if citizenship_ru:
        bits_ru.append(f"Гражданство: {citizenship_ru}.")
    bits_ru.append(
        "За клуб: "
        f"{matches} {pluralize_ru(matches, ('матч', 'матча', 'матчей'))}, "
        f"{minutes} {pluralize_ru(minutes, ('минута', 'минуты', 'минут'))}, "
        f"{goals} {pluralize_ru(goals, ('гол', 'гола', 'голов'))}."
    )

    bits_en = [f"{name_en} is a {position_en} for Zenit."]
    if birth or birthplace_en:
        birth_part_en = "Born"
        if birth:
            birth_part_en += f" {birth}"
        if birthplace_en:
            birth_part_en += f" in {birthplace_en}"
        bits_en.append(f"{birth_part_en}.")
    if citizenship_en:
        bits_en.append(f"Citizenship: {citizenship_en}.")
    bits_en.append(
        f"For the club: {matches} matches, {minutes} minutes, {goals} goals."
    )

    return " ".join(bits_ru), " ".join(bits_en)


def parse_player_details(player_stub: dict[str, object], index: int):
    page = fetch_html(player_stub["url"])
    name_match = re.search(r"<h1 class=\"dropdown-select__name\">\s*(.*?)\s*</h1>", page, re.S)
    number_match = re.search(r"<span class=\"dropdown-select__number[^>]*>\s*([^<]+?)\s*</span>", page, re.S)
    image_match = re.search(
        r"<div class=\"player-short-bio__image\">\s*<img src=\"([^\"]+)\"",
        page,
        re.S,
    )
    rows = {
        clean_text(key): clean_text(value)
        for key, value in re.findall(
            r"<div class=\"player-short-bio__table-row[^>]*>\s*"
            r"<div class=\"player-short-bio__table-column m-left\">(.*?)</div>\s*"
            r"<div class=\"player-short-bio__table-column\">\s*(.*?)\s*</div>",
            page,
            re.S,
        )
    }
    stats = {
        clean_text(label): int(clean_text(value))
        for value, label in re.findall(
            r"player-short-bio__stats-value\">(.*?)</span>\s*"
            r"<span class=\"player-short-bio__stats-text\">(.*?)</span>",
            page,
            re.S,
        )
    }

    name_en = clean_text(name_match.group(1)) if name_match else str(player_stub["full_name"])
    name_ru = localize_player_name(name_en, "ru")
    number = parse_int(number_match.group(1) if number_match else None) or int(player_stub["number"])
    position = POSITION_LABELS.get(rows.get("Position"), player_stub["position"])
    matches = stats.get('Matches for "Zenit"', 0)
    goals = stats.get("Scored goals", 0)
    yellow_cards = stats.get("Yellow cards", 0)
    hometown_en = localize_place(rows.get("Place of Birth", ""), "en")
    hometown_ru = localize_place(hometown_en, "ru")
    citizenship_en = localize_country(rows.get("Citizenship", ""), "en")
    citizenship_ru = localize_country(citizenship_en, "ru")
    previous_club_en = localize_previous_club(rows.get("The previous club", ""), "en")
    previous_club_ru = localize_previous_club(previous_club_en, "ru")
    bio_ru, bio_en = build_player_bios(name_ru, name_en, rows, stats)

    return {
        "full_name": name_en,
        "full_name_ru": name_ru,
        "full_name_en": name_en,
        "number": number,
        "position": position,
        "captain": name_en == CAPTAIN_NAME,
        "featured": name_en in FEATURED_PLAYERS,
        "sort_order": index,
        "hometown": hometown_en,
        "hometown_ru": hometown_ru,
        "hometown_en": hometown_en,
        "place_of_birth": hometown_en,
        "place_of_birth_ru": hometown_ru,
        "place_of_birth_en": hometown_en,
        "citizenship": citizenship_en,
        "citizenship_ru": citizenship_ru,
        "citizenship_en": citizenship_en,
        "birth_date": parse_birth_date(rows.get("Was born")),
        "age": parse_int(rows.get("Age")),
        "height_cm": parse_int(rows.get("Height")),
        "weight_kg": parse_int(rows.get("Weight")),
        "previous_club": previous_club_en,
        "previous_club_ru": previous_club_ru,
        "previous_club_en": previous_club_en,
        "matches_for_club": matches,
        "minutes_for_club": stats.get('Minutes for "Zenit"', 0),
        "goals_for_club": goals,
        "yellow_cards": yellow_cards,
        "red_cards": stats.get("Red cards", 0),
        "achievements": f"{matches} matches · {goals} goals · {yellow_cards} YC",
        "achievements_ru": f"{matches} матчей · {goals} голов · {yellow_cards} ЖК",
        "achievements_en": f"{matches} matches · {goals} goals · {yellow_cards} YC",
        "bio": bio_en,
        "bio_ru": bio_ru,
        "bio_en": bio_en,
        "remote_photo_url": absolute_url(image_match.group(1)) if image_match else "",
        "source_url": str(player_stub["url"]),
    }


def parse_news(limit: int = 6):
    listing = fetch_html(NEWS_URL)
    article_links = []
    seen = set()
    for href, body in re.findall(r"<a href=\"(/news/[^\"]+\.htm)\"[^>]*>(.*?)</a>", listing, re.S):
        title = clean_news_title(body)
        if href in seen or len(title) < 8:
            continue
        seen.add(href)
        article_links.append((absolute_url(href), title))
        if len(article_links) >= limit:
            break

    news_items = []
    for url, title in article_links:
        page = fetch_html(url)
        try:
            ru_page = fetch_html(url.replace(BASE_URL, RU_BASE_URL))
        except Exception:  # noqa: BLE001
            ru_page = ""
        excerpt_match = re.search(r"<meta property=\"og:description\" content=\"([^\"]+)\"", page)
        excerpt_match_ru = re.search(r"<meta property=\"og:description\" content=\"([^\"]+)\"", ru_page)
        title_match_ru = re.search(r"<h1[^>]*>(.*?)</h1>", ru_page, re.S)
        cover_match = re.search(r"<figure class=\"newsitem__photo.*?<img src=\"([^\"]+)\"", page, re.S)
        date_matches = re.findall(r"<time[^>]*datetime=\"([^\"]+)\"[^>]*>(.*?)</time>", page, re.S)
        published_at = timezone.now()
        if date_matches:
            date_raw = date_matches[-1][0]
            published_at = timezone.make_aware(datetime.strptime(date_raw, "%Y-%m-%d"), MOSCOW_TZ)
        title_en = title
        title_ru = (
            clean_text(title_match_ru.group(1))
            if title_match_ru
            else localize_story_title(title_en, "ru")
        )
        excerpt_en = clean_text(excerpt_match.group(1)) if excerpt_match else title_en
        excerpt_ru_raw = clean_text(excerpt_match_ru.group(1)) if excerpt_match_ru else ""
        excerpt_ru_raw = re.sub(r"\s*-\s*новости футбольного клуба зенит\s*$", "", excerpt_ru_raw, flags=re.I)
        excerpt_ru = excerpt_ru_raw or localize_story_excerpt(excerpt_en, "ru")
        body_en = "Official Zenit story. Read the full piece at the source."
        body_ru = localize_story_body(body_en, "ru")
        news_items.append(
            {
                "title": title_en,
                "title_ru": title_ru,
                "title_en": title_en,
                "excerpt": excerpt_en[:255],
                "excerpt_ru": excerpt_ru[:255],
                "excerpt_en": excerpt_en[:255],
                "body": body_en,
                "body_ru": body_ru,
                "body_en": body_en,
                "published_at": published_at,
                "featured": len(news_items) < 3,
                "source_name": "FC Zenit",
                "source_name_ru": "ФК «Зенит»",
                "source_name_en": "FC Zenit",
                "source_url": url,
                "remote_cover_url": absolute_url(cover_match.group(1), BASE_URL) if cover_match else "",
            }
        )
    return news_items


def parse_matches():
    page = fetch_html(SCHEDULE_URL)
    parsed_matches = []
    for chunk in page.split('<div class="table-head__month">')[1:]:
        header_raw, section_html = chunk.split("</div>", 1)
        month_label = clean_text(header_raw)
        for block in re.split(r'(?=<div class="sezon-table__row )', section_html):
            if 'class="sezon-table__row' not in block:
                continue
            date_match = re.search(r"<div class=\"m-date\"[^>]*>(.*?)</div>", block, re.S)
            time_match = re.search(r"<div class=\"m-time\"[^>]*>(.*?)</div>", block, re.S)
            competition_match = re.search(r"<div class=\"m-sub-type\">\s*(.*?)\s*</div>", block, re.S)
            venue_match = re.search(r"<div class=\"m-type\">(.*?)</div>", block, re.S)
            href_match = re.search(r"<a class=\"table-score\"\s*href=\"([^\"]+)\"", block, re.S)
            opponent_match = re.search(r"player-opponent-img.*?<img[^>]+alt=\"([^\"]+)\"", block, re.S)
            opponent_logo_match = re.search(r"player-opponent-img.*?<img src=\"([^\"]+)\"", block, re.S)
            score_values = re.findall(r"<span(?: class=\"([^\"]+)\")?>(\d+)</span>", block)

            if not (date_match and time_match and competition_match and venue_match and href_match and opponent_match):
                continue

            start_at = parse_schedule_datetime(month_label, clean_text(date_match.group(1)), clean_text(time_match.group(1)))
            if not start_at:
                continue

            competition_en = translate_competition(clean_text(competition_match.group(1)), "en")
            competition_ru = translate_competition(competition_en, "ru")
            venue_en = translate_venue(clean_text(venue_match.group(1)), "en")
            venue_ru = translate_venue(venue_en, "ru")
            score_for = None
            score_against = None
            if score_values:
                for css_class, value in score_values:
                    if "zenit-score" in css_class:
                        score_for = int(value)
                    elif score_against is None:
                        score_against = int(value)
                if score_for is None and len(score_values) == 2:
                    score_for = int(score_values[0][1])
                    score_against = int(score_values[1][1])

            is_finished = "m-datajs-played-match" in block and score_for is not None and score_against is not None
            if is_finished:
                summary_ru = f"{competition_ru} · {venue_ru} · счёт {score_for}:{score_against}."
                summary_en = f"{competition_en} · {venue_en} · score {score_for}:{score_against}."
                status = Match.Status.FINISHED
            else:
                summary_ru = f"Предстоящий матч «Зенита» в турнире {competition_ru}."
                summary_en = f"Upcoming Zenit fixture in {competition_en}."
                status = Match.Status.UPCOMING

            opponent_en = clean_text(opponent_match.group(1))
            opponent_ru = translate_opponent(opponent_en, "ru")
            city_ru = "Санкт-Петербург" if "Газпром Арена" in venue_ru else ""
            city_en = "Saint Petersburg" if "Gazprom Arena" in venue_en else ""

            parsed_matches.append(
                {
                    "opponent": opponent_ru,
                    "opponent_ru": opponent_ru,
                    "opponent_en": opponent_en,
                    "competition": competition_ru,
                    "competition_ru": competition_ru,
                    "competition_en": competition_en,
                    "start_at": start_at,
                    "venue": venue_ru,
                    "venue_ru": venue_ru,
                    "venue_en": venue_en,
                    "city": city_ru,
                    "city_ru": city_ru,
                    "city_en": city_en,
                    "status": status,
                    "score_for": score_for,
                    "score_against": score_against,
                    "summary": summary_ru,
                    "summary_ru": summary_ru,
                    "summary_en": summary_en,
                    "source_url": absolute_url(href_match.group(1)),
                    "opponent_logo_url": absolute_url(opponent_logo_match.group(1)) if opponent_logo_match else "",
                    "featured": False,
                }
            )

    parsed_matches.sort(key=lambda item: item["start_at"], reverse=True)
    upcoming = sorted([match for match in parsed_matches if match["status"] == Match.Status.UPCOMING], key=lambda item: item["start_at"])
    recent = sorted(
        [match for match in parsed_matches if match["status"] == Match.Status.FINISHED],
        key=lambda item: item["start_at"],
        reverse=True,
    )
    if upcoming:
        upcoming[0]["featured"] = True
    elif recent:
        recent[0]["featured"] = True
    return parsed_matches


def _serialize_snapshot_item(item: dict):
    payload = {}
    for key, value in item.items():
        if isinstance(value, datetime):
            payload[key] = value.isoformat()
        elif hasattr(value, "isoformat"):
            payload[key] = value.isoformat()
        else:
            payload[key] = value
    return payload


def build_live_snapshot():
    squad = parse_squad()
    players = [_serialize_snapshot_item(parse_player_details(player_stub, index)) for index, player_stub in enumerate(squad, start=1)]
    news_items = [_serialize_snapshot_item(item) for item in parse_news()]
    matches = [_serialize_snapshot_item(item) for item in parse_matches()]

    wins = goals = clean_sheets = 0
    for item in matches:
        if item["score_for"] is not None and item["score_against"] is not None:
            goals += item["score_for"]
            if item["score_for"] > item["score_against"]:
                wins += 1
            if item["score_against"] == 0:
                clean_sheets += 1

    return {
        "club_profile": {
            "name": "ФК Зенит",
            "name_ru": "ФК Зенит",
            "name_en": "FC Zenit",
            "short_name": "Газпром / Зенит",
            "short_name_ru": "Газпром / Зенит",
            "short_name_en": "Gazprom / Zenit",
            "tagline": "Арена, команда и матч-дэй в фирменной подаче Газпрома.",
            "tagline_ru": "Арена, команда и матч-дэй в фирменной подаче Газпрома.",
            "tagline_en": "Arena, squad and matchday presented in Gazprom's signature style.",
            "mission": (
                "Сайт опирается на официальные данные первой команды «Зенита»: состав, фотографии, "
                "календарь и клубные публикации. На фронте всё подано как премиальная футбольная "
                "витрина Газпрома с акцентом на арену, матч-дэй и чистую визуальную дисциплину."
            ),
            "mission_ru": (
                "Сайт опирается на официальные данные первой команды «Зенита»: состав, фотографии, "
                "календарь и клубные публикации. На фронте всё подано как премиальная футбольная "
                "витрина Газпрома с акцентом на арену, матч-дэй и чистую визуальную дисциплину."
            ),
            "mission_en": (
                "The website is built on official first-team Zenit data: squad, photos, fixtures and club stories. "
                "The frontend presents it as Gazprom's premium football showcase focused on the arena, matchday "
                "and clean visual discipline."
            ),
            "city": "Санкт-Петербург",
            "city_ru": "Санкт-Петербург",
            "city_en": "Saint Petersburg",
            "stadium": "Газпром Арена",
            "stadium_ru": "Газпром Арена",
            "stadium_en": "Gazprom Arena",
            "address": "Санкт-Петербург, «Газпром Арена»",
            "address_ru": "Санкт-Петербург, «Газпром Арена»",
            "address_en": "Saint Petersburg, Gazprom Arena",
            "phone": "+7 (812) 244-33-33",
            "email": "office@fc-zenit.ru",
            "telegram_url": "https://t.me/fczenit",
            "vk_url": "https://vk.com/zenit",
            "ticket_url": "https://tickets.fc-zenit.ru/en/football/tickets/#zenit",
            "membership_url": "https://tickets.fc-zenit.ru/en/all-subscriptions/#football",
            "shop_url": "https://en.shop.fc-zenit.ru/",
            "hospitality_url": "https://tickets.fc-zenit.ru/en/vip/football/business_club/",
            "video_url": "https://en.fc-zenit.ru/video/",
            "hero_badge": "Газпром футбольная программа",
            "hero_badge_ru": "Газпром футбольная программа",
            "hero_badge_en": "Gazprom football program",
            "stats_wins": wins,
            "stats_goals": goals,
            "stats_clean_sheets": clean_sheets,
            "source_name": "ФК «Зенит»",
            "source_name_ru": "ФК «Зенит»",
            "source_name_en": "FC Zenit",
            "source_url": CLUB_SOURCE_URL,
        },
        "players": players,
        "news": news_items,
        "gallery_items": [
            {
                "title": item["title_ru"],
                "title_ru": item["title_ru"],
                "title_en": item["title_en"],
                "category": GalleryItem.Category.MATCHDAY,
                "caption": item["excerpt_ru"],
                "caption_ru": item["excerpt_ru"],
                "caption_en": item["excerpt_en"],
                "remote_image_url": item["remote_cover_url"],
                "accent": "ФК «Зенит»",
                "accent_ru": "ФК «Зенит»",
                "accent_en": "FC Zenit",
                "source_name": item["source_name_ru"],
                "source_name_ru": item["source_name_ru"],
                "source_name_en": item["source_name_en"],
                "source_url": item["source_url"],
            }
            for item in news_items[:6]
        ],
        "matches": matches,
        "trophies": TROPHIES,
    }


def load_snapshot(refresh: bool = False):
    if not refresh and SNAPSHOT_PATH.exists():
        return json.loads(SNAPSHOT_PATH.read_text(encoding="utf-8"))

    snapshot = build_live_snapshot()
    SNAPSHOT_PATH.parent.mkdir(parents=True, exist_ok=True)
    SNAPSHOT_PATH.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2), encoding="utf-8")
    return snapshot


def first_text(*values):
    for value in values:
        if value is None:
            continue
        if isinstance(value, str):
            value = value.strip()
        if value != "":
            return value
    return ""


def ensure_localized_field(payload: dict, field_name: str, ru_builder=None, en_builder=None, legacy_language: str = "ru"):
    legacy = first_text(payload.get(field_name))
    value_ru = first_text(payload.get(f"{field_name}_ru"))
    value_en = first_text(payload.get(f"{field_name}_en"))
    seed = first_text(legacy, value_en, value_ru)

    if not value_ru and ru_builder and seed:
        value_ru = ru_builder(seed)
    value_ru = first_text(value_ru, legacy, value_en)

    if not value_en and en_builder and seed:
        value_en = en_builder(seed)
    value_en = first_text(value_en, legacy, value_ru)

    if legacy_language == "en":
        payload[field_name] = first_text(legacy, value_en, value_ru)
    else:
        payload[field_name] = first_text(legacy, value_ru, value_en)

    payload[f"{field_name}_ru"] = value_ru
    payload[f"{field_name}_en"] = value_en
    return payload


def ensure_player_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "full_name", lambda value: localize_player_name(value, "ru"), lambda value: localize_player_name(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "hometown", lambda value: localize_place(value, "ru"), lambda value: localize_place(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "place_of_birth", lambda value: localize_place(value, "ru"), lambda value: localize_place(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "citizenship", lambda value: localize_country(value, "ru"), lambda value: localize_country(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "previous_club", lambda value: localize_previous_club(value, "ru"), lambda value: localize_previous_club(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "bio", legacy_language="en")
    ensure_localized_field(payload, "achievements", legacy_language="en")
    return payload


def ensure_news_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "title", lambda value: localize_story_title(value, "ru"), lambda value: localize_story_title(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "excerpt", lambda value: localize_story_excerpt(value, "ru"), lambda value: localize_story_excerpt(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "body", lambda value: localize_story_body(value, "ru"), lambda value: localize_story_body(value, "en"), legacy_language="en")
    ensure_localized_field(payload, "source_name", lambda value: localize_source_name(value, "ru"), lambda value: localize_source_name(value, "en"), legacy_language="en")
    return payload


def ensure_match_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "opponent", lambda value: translate_opponent(value, "ru"), lambda value: translate_opponent(value, "en"))
    ensure_localized_field(payload, "competition", lambda value: translate_competition(value, "ru"), lambda value: translate_competition(value, "en"))
    ensure_localized_field(payload, "venue", lambda value: translate_venue(value, "ru"), lambda value: translate_venue(value, "en"))
    ensure_localized_field(payload, "city", lambda value: localize_place(value, "ru"), lambda value: localize_place(value, "en"))
    ensure_localized_field(payload, "summary", legacy_language="ru")
    return payload


def ensure_gallery_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "title", lambda value: localize_story_title(value, "ru"), lambda value: localize_story_title(value, "en"))
    ensure_localized_field(payload, "caption", lambda value: localize_story_excerpt(value, "ru"), lambda value: localize_story_excerpt(value, "en"))
    ensure_localized_field(payload, "accent", lambda value: localize_source_name(value, "ru"), lambda value: localize_source_name(value, "en"))
    ensure_localized_field(payload, "source_name", lambda value: localize_source_name(value, "ru"), lambda value: localize_source_name(value, "en"))
    return payload


def ensure_trophy_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "title", lambda value: localize_trophy_title(value, "ru"), lambda value: localize_trophy_title(value, "en"))
    ensure_localized_field(payload, "description", lambda value: localize_trophy_description(value, "ru"), lambda value: localize_trophy_description(value, "en"))
    return payload


def ensure_club_profile_localization(item: dict) -> dict:
    payload = item.copy()
    ensure_localized_field(payload, "name", legacy_language="ru")
    ensure_localized_field(payload, "short_name", legacy_language="ru")
    ensure_localized_field(payload, "tagline", legacy_language="ru")
    ensure_localized_field(payload, "mission", legacy_language="ru")
    ensure_localized_field(payload, "city", lambda value: localize_place(value, "ru"), lambda value: localize_place(value, "en"), legacy_language="ru")
    ensure_localized_field(payload, "stadium", lambda value: translate_venue(value, "ru"), lambda value: translate_venue(value, "en"), legacy_language="ru")
    ensure_localized_field(payload, "address", legacy_language="ru")
    ensure_localized_field(payload, "hero_badge", legacy_language="ru")
    ensure_localized_field(payload, "source_name", lambda value: localize_source_name(value, "ru"), lambda value: localize_source_name(value, "en"), legacy_language="ru")
    return payload


def sync_reference_data(replace: bool = True, refresh: bool = False) -> ImportSummary:
    summary = ImportSummary()
    snapshot = load_snapshot(refresh=refresh)

    if replace:
        Player.objects.all().delete()
        Match.objects.all().delete()
        NewsPost.objects.all().delete()
        GalleryItem.objects.all().delete()
        Trophy.objects.all().delete()

    for player_stub in snapshot["players"]:
        payload = ensure_player_localization(player_stub)
        if payload.get("birth_date"):
            payload["birth_date"] = datetime.fromisoformat(payload["birth_date"]).date()
        Player.objects.update_or_create(source_url=payload["source_url"], defaults=payload)
        summary.players += 1

    for item in snapshot["news"]:
        payload = ensure_news_localization(item)
        payload["published_at"] = datetime.fromisoformat(payload["published_at"])
        NewsPost.objects.update_or_create(source_url=item["source_url"], defaults=payload)
        summary.news += 1

    for item in snapshot["gallery_items"]:
        payload = ensure_gallery_localization(item)
        GalleryItem.objects.update_or_create(
            source_url=payload["source_url"],
            defaults=payload,
        )
        summary.gallery_items += 1

    matches = snapshot["matches"]
    wins = goals = clean_sheets = 0
    for item in matches:
        payload = ensure_match_localization(item)
        payload["start_at"] = datetime.fromisoformat(payload["start_at"])
        Match.objects.update_or_create(source_url=item["source_url"], defaults=payload)
        summary.matches += 1
        if item["score_for"] is not None and item["score_against"] is not None:
            goals += item["score_for"]
            if item["score_for"] > item["score_against"]:
                wins += 1
            if item["score_against"] == 0:
                clean_sheets += 1

    for trophy in snapshot["trophies"]:
        payload = ensure_trophy_localization(trophy)
        Trophy.objects.update_or_create(title=payload["title"], season=payload["season"], defaults=payload)

    ClubProfile.objects.update_or_create(
        id=1,
        defaults={
            **ensure_club_profile_localization(snapshot["club_profile"]),
            "stats_wins": wins,
            "stats_goals": goals,
            "stats_clean_sheets": clean_sheets,
        },
    )

    cache.delete(MATCH_HUB_CACHE_KEY)
    return summary
