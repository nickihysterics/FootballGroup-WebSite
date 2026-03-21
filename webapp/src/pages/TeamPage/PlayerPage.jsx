import { Navigate, useParams } from "react-router-dom";

import usePageData from "@/features/page-data/usePageData.js";
import Reveal from "@/shared/ui/Reveal/Reveal.jsx";
import Surface from "@/shared/ui/Surface/Surface.jsx";
import Section from "@/shared/ui/Section/Section.jsx";
import SectionHeading from "@/shared/ui/Section/SectionHeading.jsx";
import Chip from "@/shared/ui/Chip/Chip.jsx";
import StatCard from "@/shared/ui/Card/StatCard.jsx";

function resolvePositionLabel(position) {
  const raw = String(position || "").toUpperCase();

  if (raw === "GK") return "Вратарь";
  if (raw === "DF") return "Защитник";
  if (raw === "MF") return "Полузащитник";
  if (raw === "FW") return "Нападающий";

  return position || "Игрок";
}

function initialsOf(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
}

function formatBirthDateRu(value) {
  if (!value) return "—";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function normalizePlayer(player) {
  if (!player) return null;

  return {
    ...player,
    full_name: player.full_name || "Игрок",
    photo_url: player.photo_url || player.remote_photo_url || "",
    position_label:
      player.position_label || resolvePositionLabel(player.position),
    matches_for_club: player.matches_for_club ?? 0,
    minutes_for_club: player.minutes_for_club ?? 0,
    goals_for_club: player.goals_for_club ?? 0,
    citizenship: player.citizenship || "",
    birth_date_label:
      player.birth_date_label || formatBirthDateRu(player.birth_date),
    previous_club: player.previous_club || "—",
    height_cm: player.height_cm ?? null,
    weight_kg: player.weight_kg ?? null,
    initials: player.initials || initialsOf(player.full_name),
    captain: Boolean(player.captain),
  };
}

function resolveSlug(player) {
  if (player?.slug) return player.slug;
  if (player?.id) return String(player.id);

  const sourceTail = String(player?.source_url || "")
    .split("/")
    .filter(Boolean)
    .pop();

  if (sourceTail) return sourceTail;

  if (player?.number) return `player-${player.number}`;

  return `player-${String(player?.full_name || "unknown")
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
}

export default function PlayerPage() {
  const { playerSlug } = useParams();
  const { data } = usePageData();

  const rawPlayers =
    Array.isArray(data?.groups) && data.groups.length
      ? data.groups.flatMap((group) => group.players || [])
      : Array.isArray(data?.players)
      ? data.players
      : [];

  const allPlayers = rawPlayers
    .map((item) => {
      const normalized = normalizePlayer(item);
      return normalized
        ? {
            ...normalized,
            slug: normalized.slug || resolveSlug(normalized),
          }
        : null;
    })
    .filter(Boolean);

  const player = allPlayers.find(
    (item) => String(item.slug || item.id) === String(playerSlug),
  );

  if (!player) {
    return (
      <Navigate
        to="/error/"
        replace
        state={{ type: "not-found", title: "Игрок не найден" }}
      />
    );
  }

  return (
    <>
      <Reveal>
        <section className="mt-[18px] grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <Surface padding="none" radius="xl" className="overflow-hidden">
            <div className="h-full min-h-[520px] bg-[linear-gradient(180deg,#edf5fb_0%,#cfe1f1_100%)]">
              {player.photo_url ? (
                <img
                  src={player.photo_url}
                  alt={player.full_name}
                  className="h-full w-full object-contain object-bottom"
                />
              ) : (
                <span className="grid h-full place-items-center font-[var(--font-display)] text-7xl text-[#0d4ea5]">
                  {player.initials}
                </span>
              )}
            </div>
          </Surface>

          <Surface padding="lg" radius="xl">
            <div className="flex flex-wrap items-center gap-3">
              <Chip>#{player.number || "—"}</Chip>
              <Chip variant="pill">{player.position_label}</Chip>
            </div>

            <h1 className="mt-5 font-[var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] leading-[.92] text-[#081f3d]">
              {player.full_name}
            </h1>

            <p className="mt-4 max-w-[70ch] text-lg leading-8 text-[#5c7599]">
              {player.bio ||
                player.compact_profile ||
                "Подробный профиль игрока первой команды."}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Матчи" value={player.matches_for_club} variant="accent" />
              <StatCard label="Минуты" value={player.minutes_for_club} variant="accent" />
              <StatCard label="Голы" value={player.goals_for_club} variant="accent" />
              <StatCard
                label="Гражданство"
                value={player.citizenship || "—"}
                variant="accent"
              />
            </div>
          </Surface>
        </section>
      </Reveal>

      <Reveal>
        <Section>
          <SectionHeading
            eyebrow="Профиль"
            title="Игровые и биографические данные"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[24px] bg-[#f8fbff] p-5">
              <span className="block text-[12px] uppercase tracking-[0.12em] text-[#6b83a3]">
                Дата рождения
              </span>
              <strong>{player.birth_date_label || "—"}</strong>
            </div>

            <div className="rounded-[24px] bg-[#f8fbff] p-5">
              <span className="block text-[12px] uppercase tracking-[0.12em] text-[#6b83a3]">
                Рост
              </span>
              <strong>{player.height_cm ? `${player.height_cm} см` : "—"}</strong>
            </div>

            <div className="rounded-[24px] bg-[#f8fbff] p-5">
              <span className="block text-[12px] uppercase tracking-[0.12em] text-[#6b83a3]">
                Вес
              </span>
              <strong>{player.weight_kg ? `${player.weight_kg} кг` : "—"}</strong>
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}