// Историческая запись без счёта не становится будущим матчем из-за старого статуса.
export function resolveMatchState(match, date, now = Date.now()) {
  const raw = `${match?.status || ""} ${match?.status_label || ""}`.toLowerCase();
  const kickoff = date?.getTime();
  if (/finished|заверш|сыгран|побед|пораж|нич/.test(raw) || /\d+\s*[:–-]\s*\d+/.test(match?.result_label || "")) return "finished";
  if (/live|в игре|идет|идёт/.test(raw)) return kickoff >= now - 6 * 60 * 60 * 1000 ? "live" : "archived";
  if (kickoff > now) return "upcoming";
  return "archived";
}
