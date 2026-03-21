import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/shared/lib/cn.js";
import Surface from "@/shared/ui/Surface/Surface.jsx";

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
    number: player.number ?? "",
    position_label:
      player.position_label || resolvePositionLabel(player.position),
    matches_for_club: player.matches_for_club ?? 0,
    minutes_for_club: player.minutes_for_club ?? 0,
    goals_for_club: player.goals_for_club ?? 0,
    birth_date_label:
      player.birth_date_label || formatBirthDateRu(player.birth_date),
    citizenship: player.citizenship || "",
    previous_club: player.previous_club || "—",
    height_cm: player.height_cm ?? null,
    weight_kg: player.weight_kg ?? null,
    initials: player.initials || initialsOf(player.full_name),
    captain: Boolean(player.captain),
  };
}

function getTone(player) {
  const raw = `${player?.position_label || ""} ${player?.position || ""}`.toLowerCase();

  if (raw.includes("gk") || raw.includes("врат")) {
    return {
      poster: "bg-[linear-gradient(180deg,#eef8ff_0%,#dcefff_100%)]",
      line: "from-sky-500 via-cyan-400 to-sky-300",
      captainChip: "border-sky-200 bg-white/90 text-sky-700",
      ringClass: "border-sky-500/14",
      glowClass: "bg-sky-300/18",
      numberClass: "text-sky-700/[0.08]",
    };
  }

  if (raw.includes("df") || raw.includes("защит")) {
    return {
      poster: "bg-[linear-gradient(180deg,#f1f4ff_0%,#dde6ff_100%)]",
      line: "from-indigo-500 via-blue-500 to-sky-400",
      captainChip: "border-indigo-200 bg-white/90 text-indigo-700",
      ringClass: "border-indigo-500/14",
      glowClass: "bg-indigo-300/16",
      numberClass: "text-indigo-700/[0.08]",
    };
  }

  if (raw.includes("mf") || raw.includes("полузащит")) {
    return {
      poster: "bg-[linear-gradient(180deg,#f5f1ff_0%,#ece3ff_100%)]",
      line: "from-violet-500 via-fuchsia-400 to-sky-300",
      captainChip: "border-violet-200 bg-white/90 text-violet-700",
      ringClass: "border-violet-500/14",
      glowClass: "bg-violet-300/16",
      numberClass: "text-violet-700/[0.08]",
    };
  }

  return {
    poster: "bg-[linear-gradient(180deg,#fff8ef_0%,#ffeacf_100%)]",
    line: "from-amber-500 via-orange-400 to-yellow-300",
    captainChip: "border-amber-200 bg-white/90 text-amber-700",
    ringClass: "border-amber-500/16",
    glowClass: "bg-amber-300/18",
    numberClass: "text-amber-700/[0.08]",
  };
}

function MetaLine(player) {
  const parts = [
    player.citizenship || null,
    player.height_cm ? `${player.height_cm} см` : null,
    player.weight_kg ? `${player.weight_kg} кг` : null,
  ].filter(Boolean);

  return parts.join(" · ") || "Игрок первой команды";
}

function InfoCell({ label, value }) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-[#edf4fb] bg-[linear-gradient(180deg,#fbfdff_0%,#f4f9fe_100%)] px-3 py-2.5",
      )}
    >
      <div
        className={cn(
          "text-[10px] uppercase tracking-[0.12em] text-[#7a91ae]",
        )}
      >
        {label}
      </div>

      <div className={cn("mt-1 truncate font-semibold text-[#0b2344]")}>
        {value}
      </div>
    </div>
  );
}

function CardPosterRings({ ringClass, glowClass }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-[16px] bottom-[46px] z-[1] flex items-center justify-center",
      )}
    >
      <div className={cn("relative h-[154px] w-[154px]")}>
        <div className={cn("absolute inset-0 rounded-full border", ringClass)} />
        <div className={cn("absolute inset-[18px] rounded-full border", ringClass)} />
        <div className={cn("absolute inset-[40px] rounded-full border", ringClass)} />
        <div
          className={cn(
            "absolute inset-[28px] rounded-full blur-2xl",
            glowClass,
          )}
        />
      </div>
    </div>
  );
}

function PlayerPoster({ player }) {
  const tone = getTone(player);
  const photo = player.photo_url || "";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,.55)]",
        "h-[clamp(18rem,34vw,21rem)]",
        tone.poster,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.72),transparent_44%)]",
        )}
      />

      <div
        className={cn(
          "absolute right-4 top-0 z-[5] font-[var(--font-display)] text-[92px] leading-none tracking-[-0.08em]",
          tone.numberClass,
        )}
      >
        {player.number || ""}
      </div>

      <CardPosterRings ringClass={tone.ringClass} glowClass={tone.glowClass} />

      {player.captain ? (
        <span
          className={cn(
            "absolute left-3 top-3 z-[6] inline-flex min-h-8 items-center rounded-full border px-2.5 text-[10px] font-bold uppercase tracking-[0.12em] shadow-[0_10px_24px_rgba(8,31,61,.06)] backdrop-blur-md",
            tone.captainChip,
          )}
        >
          Капитан
        </span>
      ) : null}

      <div
        className={cn(
          "absolute inset-x-3 bottom-0 z-[3] h-1.5 overflow-hidden rounded-full",
        )}
      >
        <div className={cn("h-full w-full bg-gradient-to-r", tone.line)} />
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-[1] h-20 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.14))]",
        )}
      />

      {photo ? (
        <div className={cn("absolute inset-0 z-[2] overflow-hidden")}>
          <div
            className={cn(
              "absolute inset-x-0 top-1 bottom-0 flex items-start justify-center px-3 sm:px-4",
            )}
          >
            <img
              src={photo}
              alt={player.full_name}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={cn(
                "pointer-events-none block h-[114%] w-auto max-w-none select-none drop-shadow-[0_16px_28px_rgba(8,31,61,.14)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]",
              )}
            />
          </div>
        </div>
      ) : (
        <span
          className={cn(
            "grid h-full place-items-center font-[var(--font-display)] text-5xl text-[#0d4ea5]",
          )}
        >
          {player.initials}
        </span>
      )}
    </div>
  );
}

export default function TeamPlayerCard({ player, to, className }) {
  const safePlayer = normalizePlayer(player);

  if (!safePlayer) {
    return null;
  }

  const Comp = to ? Link : "article";
  const compProps = to
    ? {
        to,
        state: {
          playerPreview: {
            full_name: safePlayer.full_name,
            number: safePlayer.number,
            position_label: safePlayer.position_label,
            photo_url: safePlayer.photo_url,
            initials: safePlayer.initials,
            citizenship: safePlayer.citizenship,
          },
        },
      }
    : {};

  return (
    <Comp {...compProps} className={cn("group block h-full")}>
      <Surface
        padding="none"
        radius="xl"
        className={cn(
          "h-full border-[#dce8f4] bg-[linear-gradient(180deg,rgba(255,255,255,.98),rgba(248,251,255,.98))] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(8,31,61,.10)]",
          className,
        )}
      >
        <div className={cn("p-3.5")}>
          <PlayerPoster player={safePlayer} />

          <div className={cn("px-1 pb-1 pt-3.5")}>
            <div className={cn("flex items-start justify-between gap-3")}>
              <div className={cn("min-w-0")}>
                <h3
                  className={cn(
                    "font-[var(--font-display)] text-[clamp(1.7rem,2.1vw,2.2rem)] leading-[0.94] tracking-[-0.045em] text-[#0b2344]",
                  )}
                >
                  {safePlayer.full_name}
                </h3>

                <p className={cn("mt-2.5 text-[13px] leading-6 text-[#5f7899]")}>
                  {MetaLine(safePlayer)}
                </p>
              </div>

              <span
                className={cn(
                  "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dbe8f7] bg-white text-[#0d4ea5] shadow-[0_8px_22px_rgba(8,31,61,.05)] transition duration-300 group-hover:border-[#bfd9fb] group-hover:bg-[#f4f9ff]",
                )}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
              </span>
            </div>

            <div className={cn("mt-4 grid grid-cols-2 gap-2.5")}>
              <InfoCell label="Матчи" value={safePlayer.matches_for_club} />
              <InfoCell label="Минуты" value={safePlayer.minutes_for_club} />
              <InfoCell label="Дата рождения" value={safePlayer.birth_date_label} />
              <InfoCell label="Клуб" value={safePlayer.previous_club} />
            </div>
          </div>
        </div>
      </Surface>
    </Comp>
  );
}