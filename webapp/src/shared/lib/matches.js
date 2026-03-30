import { CalendarDays, CheckCircle2, Clock3, MinusCircle, Sparkles, XCircle } from "lucide-react";

import {
  formatFullDateLabel as formatFullDateValue,
  formatMonthLabel as formatMonthValue,
  formatTimeLabel as formatTimeValue,
  translate,
} from "@/shared/i18n/index.jsx";

function capitalize(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function parseDate(value) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return date;
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/--+/g, "-");
}

export function initialsOfTeam(name) {
  const raw = String(name || "")
    .replace(/\bфк\b/giu, "")
    .trim();

  const parts = raw.split(/\s+/).filter(Boolean);

  if (!parts.length) return "FC";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() || "F";

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function formatMonthLabel(language, date) {
  if (!date) return translate(language, "match.withoutDate");

  return capitalize(formatMonthValue(language, date));
}

export function formatFullDateLabel(language, date) {
  if (!date) return translate(language, "match.datePending");

  return capitalize(formatFullDateValue(language, date));
}

export function formatTimeLabel(language, date) {
  if (!date) return translate(language, "common.na");

  return formatTimeValue(language, date);
}

function parseScore(resultLabel) {
  const match = String(resultLabel || "").match(/(\d+)\s*[:–-]\s*(\d+)/);
  if (!match) return null;

  return {
    home: Number(match[1]),
    away: Number(match[2]),
  };
}

export function resolveMatchState(match, date) {
  const raw = `${match?.status || ""} ${match?.status_label || ""}`.toLowerCase();

  if (
    raw.includes("live") ||
    raw.includes("в игре") ||
    raw.includes("идет") ||
    raw.includes("идёт")
  ) {
    return "live";
  }

  if (
    raw.includes("заверш") ||
    raw.includes("сыгран") ||
    raw.includes("побед") ||
    raw.includes("пораж") ||
    raw.includes("нич")
  ) {
    return "finished";
  }

  if (match?.result_label && /\d/.test(String(match.result_label))) {
    return "finished";
  }

  if (date && date.getTime() > Date.now()) {
    return "upcoming";
  }

  return "upcoming";
}

export function resolveStatusMeta(match, language = "ru") {
  const raw = `${match?.status_label || ""} ${match?.summary || ""}`.toLowerCase();
  const state = match?.state;
  const score = parseScore(match?.result_label);

  if (state === "live") {
    return {
      label: translate(language, "match.status.live"),
      tone: "live",
      icon: Sparkles,
    };
  }

  if (raw.includes("побед")) {
    return {
      label: translate(language, "match.status.win"),
      tone: "success",
      icon: CheckCircle2,
    };
  }

  if (raw.includes("пораж")) {
    return {
      label: translate(language, "match.status.loss"),
      tone: "danger",
      icon: XCircle,
    };
  }

  if (raw.includes("нич")) {
    return {
      label: translate(language, "match.status.draw"),
      tone: "warning",
      icon: MinusCircle,
    };
  }

  if (state === "upcoming") {
    return {
      label: translate(language, "match.status.soon"),
      tone: "upcoming",
      icon: CalendarDays,
    };
  }

  if (score) {
    if (score.home > score.away) {
      return {
        label: translate(language, "match.status.win"),
        tone: "success",
        icon: CheckCircle2,
      };
    }

    if (score.home < score.away) {
      return {
        label: translate(language, "match.status.loss"),
        tone: "danger",
        icon: XCircle,
      };
    }

    return {
      label: translate(language, "match.status.draw"),
      tone: "warning",
      icon: MinusCircle,
    };
  }

  return {
    label: translate(language, "match.status.finished"),
    tone: "neutral",
    icon: Clock3,
  };
}

export function normalizeMatch(match, index, language = "ru") {
  const date = parseDate(match?.kickoff_iso);
  const state = resolveMatchState(match, date);
  const opponent = match?.opponent || translate(language, "common.opponent");
  const competition = match?.competition || translate(language, "match.clubMatch");

  const normalized = {
    ...match,
    index,
    date,
    state,
    opponent,
    opponentInitials: initialsOfTeam(opponent),
    competition,
    competitionKey: slugify(competition),
    monthKey: date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      : `unknown-${index}`,
    monthLabel: formatMonthLabel(language, date),
    fullDateLabel: formatFullDateLabel(language, date),
    timeLabel: formatTimeLabel(language, date),
    venueLabel: match?.venue || translate(language, "match.arenaTba"),
    cityLabel: match?.city || translate(language, "match.locationTba"),
    resultText:
      state === "upcoming" && !(match?.result_label && /\d/.test(String(match.result_label)))
        ? "VS"
        : match?.result_label || translate(language, "common.na"),
    summaryText: match?.summary || "",
  };

  return {
    ...normalized,
    statusMeta: resolveStatusMeta(normalized, language),
  };
}

export function buildTournamentOptions(matches, language = "ru") {
  const seen = new Map();

  matches.forEach((match) => {
    if (!seen.has(match.competitionKey)) {
      seen.set(match.competitionKey, {
        value: match.competitionKey,
        label: match.competition,
      });
    }
  });

  return [{ value: "all", label: translate(language, "match.allTournaments") }, ...seen.values()];
}

export function buildMonthOptions(matches, language = "ru") {
  const seen = new Map();

  matches.forEach((match) => {
    if (!seen.has(match.monthKey)) {
      seen.set(match.monthKey, {
        value: match.monthKey,
        label: match.monthLabel,
      });
    }
  });

  return [{ value: "all", label: translate(language, "match.allMonths") }, ...seen.values()];
}

export function groupMatchesByMonth(matches) {
  const bucket = new Map();

  matches.forEach((match) => {
    if (!bucket.has(match.monthKey)) {
      bucket.set(match.monthKey, {
        monthKey: match.monthKey,
        monthLabel: match.monthLabel,
        items: [],
      });
    }

    bucket.get(match.monthKey).items.push(match);
  });

  return [...bucket.values()];
}

export function filterMatches(matches, filters) {
  const { feedMode, tournamentFilter, monthFilter } = filters;

  return matches.filter((match) => {
    const byFeed =
      feedMode === "all" ||
      (feedMode === "upcoming" && match.state === "upcoming") ||
      (feedMode === "finished" && match.state === "finished") ||
      (feedMode === "live" && match.state === "live");

    const byTournament =
      tournamentFilter === "all" || match.competitionKey === tournamentFilter;

    const byMonth = monthFilter === "all" || match.monthKey === monthFilter;

    return byFeed && byTournament && byMonth;
  });
}
