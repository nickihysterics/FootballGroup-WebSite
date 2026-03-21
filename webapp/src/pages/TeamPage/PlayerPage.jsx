import { useEffect, useState } from "react";
import {
  CalendarDays,
  Flag,
  MapPin,
  Shield,
  UserRound,
  Weight,
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import usePageData from "@/features/page-data/usePageData.js";
import { cn } from "@/shared/lib/cn.js";
import Reveal from "@/shared/ui/Reveal/Reveal.jsx";
import Surface from "@/shared/ui/Surface/Surface.jsx";
import TeamPlayerCard from "@/shared/ui/Card/TeamPlayerCard.jsx";

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function safeNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function resolvePositionLabel(position) {
  const raw = String(position || "").toUpperCase();

  if (raw === "GK") return "Вратарь";
  if (raw === "DF") return "Защитник";
  if (raw === "MF") return "Полузащитник";
  if (raw === "FW") return "Нападающий";

  return position || "Игрок";
}

function resolvePositionPlural(position) {
  const raw = String(position || "").toUpperCase();

  if (raw === "GK") return "Вратари";
  if (raw === "DF") return "Защитники";
  if (raw === "MF") return "Полузащитники";
  if (raw === "FW") return "Нападающие";

  return "Игроки";
}

function resolvePositionKey(value) {
  const raw = String(value || "").toUpperCase();

  if (raw.includes("GK") || raw.includes("ВРАТ")) return "GK";
  if (raw.includes("DF") || raw.includes("ЗАЩ")) return "DF";
  if (raw.includes("MF") || raw.includes("ПОЛУ")) return "MF";
  if (raw.includes("FW") || raw.includes("НАП")) return "FW";

  return raw || "FW";
}

function initialsOf(name) {
  return (
    String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "?"
  );
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

function formatNumber(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "—";
  return new Intl.NumberFormat("ru-RU").format(num);
}

function normalizePlayer(player) {
  if (!player) return null;

  return {
    ...player,
    full_name: player.full_name || "Игрок",
    photo_url: player.photo_url || player.remote_photo_url || "",
    position: resolvePositionKey(player.position),
    position_label:
      player.position_label || resolvePositionLabel(player.position),
    matches_for_club: player.matches_for_club ?? 0,
    minutes_for_club: player.minutes_for_club ?? 0,
    goals_for_club: player.goals_for_club ?? 0,
    yellow_cards: player.yellow_cards ?? 0,
    red_cards: player.red_cards ?? 0,
    citizenship: player.citizenship || "—",
    previous_club: player.previous_club || "—",
    birth_date_label:
      player.birth_date_label || formatBirthDateRu(player.birth_date),
    height_cm: player.height_cm ?? null,
    weight_kg: player.weight_kg ?? null,
    age: player.age ?? null,
    place_of_birth: player.place_of_birth || player.hometown || "",
    initials: player.initials || initialsOf(player.full_name),
    captain: Boolean(player.captain),
    featured: Boolean(player.featured),
    achievements: player.achievements || "",
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

function getPlayerTone(player) {
  const raw = `${player?.position_label || ""} ${player?.position || ""}`.toLowerCase();

  if (raw.includes("gk") || raw.includes("врат")) {
    return {
      heroBg:
        "bg-[linear-gradient(180deg,rgba(248,252,255,.98)_0%,rgba(234,245,255,.98)_45%,rgba(226,239,252,.98)_100%)]",
      posterBg: "bg-[linear-gradient(180deg,#eef8ff_0%,#dcefff_100%)]",
      line: "from-sky-500 via-cyan-400 to-sky-300",
      chipClass: "border-sky-200/80 bg-white/88 text-sky-700",
      strongChipClass: "border-sky-600 bg-sky-600 text-white",
      ringClass: "border-sky-500/14",
      glowClass: "bg-sky-300/18",
      numberClass: "text-sky-700/[0.08]",
    };
  }

  if (raw.includes("df") || raw.includes("защит")) {
    return {
      heroBg:
        "bg-[linear-gradient(180deg,rgba(250,252,255,.98)_0%,rgba(240,245,255,.98)_45%,rgba(231,239,255,.98)_100%)]",
      posterBg: "bg-[linear-gradient(180deg,#f1f4ff_0%,#dde6ff_100%)]",
      line: "from-indigo-500 via-blue-500 to-sky-400",
      chipClass: "border-indigo-200/80 bg-white/88 text-indigo-700",
      strongChipClass: "border-indigo-600 bg-indigo-600 text-white",
      ringClass: "border-indigo-500/14",
      glowClass: "bg-indigo-300/16",
      numberClass: "text-indigo-700/[0.08]",
    };
  }

  if (raw.includes("mf") || raw.includes("полузащит")) {
    return {
      heroBg:
        "bg-[linear-gradient(180deg,rgba(251,250,255,.98)_0%,rgba(245,240,255,.98)_45%,rgba(238,232,255,.98)_100%)]",
      posterBg: "bg-[linear-gradient(180deg,#f5f1ff_0%,#ece3ff_100%)]",
      line: "from-violet-500 via-fuchsia-400 to-sky-300",
      chipClass: "border-violet-200/80 bg-white/88 text-violet-700",
      strongChipClass: "border-violet-600 bg-violet-600 text-white",
      ringClass: "border-violet-500/14",
      glowClass: "bg-violet-300/16",
      numberClass: "text-violet-700/[0.08]",
    };
  }

  return {
    heroBg:
      "bg-[linear-gradient(180deg,rgba(255,252,247,.98)_0%,rgba(255,246,234,.98)_45%,rgba(255,238,214,.98)_100%)]",
    posterBg: "bg-[linear-gradient(180deg,#fff8ef_0%,#ffeacf_100%)]",
    line: "from-amber-500 via-orange-400 to-yellow-300",
    chipClass: "border-amber-200/80 bg-white/88 text-amber-700",
    strongChipClass: "border-amber-500 bg-amber-500 text-white",
    ringClass: "border-amber-500/16",
    glowClass: "bg-amber-300/18",
    numberClass: "text-amber-700/[0.08]",
  };
}

function getHeroStats(player) {
  const position = resolvePositionKey(player.position);

  if (position === "GK") {
    return [
      { label: "Матчи", value: formatNumber(player.matches_for_club) },
      { label: "Минуты", value: formatNumber(player.minutes_for_club) },
      { label: "Рост", value: player.height_cm ? `${player.height_cm} см` : "—" },
    ];
  }

  return [
    { label: "Матчи", value: formatNumber(player.matches_for_club) },
    { label: "Минуты", value: formatNumber(player.minutes_for_club) },
    { label: "Голы", value: formatNumber(player.goals_for_club) },
  ];
}

function buildPlayerTraits(player) {
  const position = resolvePositionKey(player.position);
  const matches = safeNumber(player.matches_for_club);
  const minutes = safeNumber(player.minutes_for_club);
  const goals = safeNumber(player.goals_for_club);
  const yellow = safeNumber(player.yellow_cards);
  const red = safeNumber(player.red_cards);
  const age = safeNumber(player.age, 26);
  const height = safeNumber(player.height_cm, 180);
  const weight = safeNumber(player.weight_kg, 75);

  const minutesBoost = minutes / 280;
  const matchesBoost = matches / 9;
  const goalBoost = goals * 1.8;
  const ageSpeedAdjust =
    age <= 23 ? 8 : age <= 28 ? 5 : age <= 32 ? 1 : -4;
  const disciplinePenalty = yellow * 1.6 + red * 10;
  const sizeBoost = (height - 175) * 0.45 + (weight - 72) * 0.25;

  if (position === "GK") {
    return [
      {
        label: "Реакция",
        value: clamp(72 + minutesBoost + ageSpeedAdjust * 0.35, 58, 97),
      },
      {
        label: "Позиция",
        value: clamp(68 + matchesBoost + minutes / 420, 58, 96),
      },
      {
        label: "Игра руками",
        value: clamp(70 + matchesBoost, 55, 96),
      },
      {
        label: "Игра ногами",
        value: clamp(58 + minutes / 520 + goalBoost * 0.2, 46, 88),
      },
      {
        label: "Хладнокровие",
        value: clamp(74 + matches / 14 - disciplinePenalty * 0.18, 50, 95),
      },
    ];
  }

  if (position === "DF") {
    return [
      {
        label: "Скорость",
        value: clamp(
          66 + ageSpeedAdjust + (180 - Math.abs(height - 180)) * 0.2,
          54,
          92,
        ),
      },
      {
        label: "Выносливость",
        value: clamp(68 + minutesBoost + matches / 15, 56, 96),
      },
      {
        label: "Отбор",
        value: clamp(72 + matchesBoost + sizeBoost * 0.35, 58, 97),
      },
      {
        label: "Мощь",
        value: clamp(70 + sizeBoost, 56, 95),
      },
      {
        label: "Дисциплина",
        value: clamp(88 - disciplinePenalty + matches / 28, 40, 94),
      },
    ];
  }

  if (position === "MF") {
    return [
      {
        label: "Скорость",
        value: clamp(68 + ageSpeedAdjust, 55, 93),
      },
      {
        label: "Выносливость",
        value: clamp(70 + minutesBoost + matches / 16, 58, 97),
      },
      {
        label: "Техника",
        value: clamp(72 + goalBoost * 0.35, 58, 97),
      },
      {
        label: "Креативность",
        value: clamp(70 + goalBoost * 0.3 + matches / 18, 56, 95),
      },
      {
        label: "Игровой интеллект",
        value: clamp(72 + matches / 10 + age * 0.15, 58, 96),
      },
    ];
  }

  return [
    {
      label: "Скорость",
      value: clamp(72 + ageSpeedAdjust, 58, 96),
    },
    {
      label: "Выносливость",
      value: clamp(66 + minutesBoost + matches / 16, 56, 95),
    },
    {
      label: "Удар",
      value: clamp(72 + goalBoost, 55, 98),
    },
    {
      label: "Резкость",
      value: clamp(70 + goalBoost * 0.4 + ageSpeedAdjust * 0.5, 56, 96),
    },
    {
      label: "Мощь",
      value: clamp(66 + sizeBoost * 0.8, 54, 94),
    },
  ];
}

function buildBiography(player) {
  const birthInfo =
    player.birth_date_label !== "—"
      ? `Родился ${player.birth_date_label}`
      : "Дата рождения не указана";

  const birthPlace = player.place_of_birth ? ` в ${player.place_of_birth}` : "";
  const nationality =
    player.citizenship && player.citizenship !== "—"
      ? ` Представляет ${player.citizenship}.`
      : "";
  const previousClub =
    player.previous_club && player.previous_club !== "—"
      ? ` До перехода в клуб выступал за ${player.previous_club}.`
      : "";
  const shirtNumber = player.number ? ` Играет под номером #${player.number}.` : "";
  const captain =
    player.captain
      ? " Является одним из лидеров команды и носит капитанскую повязку."
      : "";

  let roleText = " Игрок первой команды и важная часть текущей обоймы клуба.";

  if (player.position === "GK") {
    roleText =
      " Вратарь, который отвечает за надёжность последнего рубежа, игру на выходах и контроль штрафной.";
  } else if (player.position === "DF") {
    roleText =
      " Защитник, который даёт команде баланс в обороне, работу в единоборствах и надёжность без мяча.";
  } else if (player.position === "MF") {
    roleText =
      " Полузащитник, который помогает команде в темпе игры, продвижении мяча и связке между линиями.";
  } else if (player.position === "FW") {
    roleText =
      " Нападающий, который отвечает за остроту впереди, рывки за спину и завершение эпизодов.";
  }

  const paragraphOne = `${player.full_name} — ${player.position_label.toLowerCase()} первой команды. ${birthInfo}${birthPlace}.${nationality}${previousClub}${shirtNumber}`;
  const paragraphTwo = `${roleText}${captain}`;

  return [paragraphOne.trim(), paragraphTwo.trim()];
}

function HeroPill({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-full border px-3.5 text-[11px] font-semibold shadow-[0_10px_24px_rgba(8,31,61,.05)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}

function MainStatCard({ label, value, tone }) {
  return (
    <div className="rounded-[20px] border border-white/75 bg-white/90 px-4 py-3 shadow-[0_14px_28px_rgba(8,31,61,.05)]">
      <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#7690b0]">
        {label}
      </div>

      <div className="mt-2 font-[var(--font-display)] text-[clamp(1.8rem,2.2vw,2.5rem)] leading-none tracking-[-0.05em] text-[#0b2344]">
        {value}
      </div>

      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-[#e5eef8]">
        <div
          className={cn(
            "h-full w-[96px] rounded-full bg-gradient-to-r",
            tone.line,
          )}
        />
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, hint, valueClassName }) {
  return (
    <div className="rounded-[22px] border border-[#dce8f4] bg-[linear-gradient(180deg,rgba(255,255,255,.98),rgba(248,251,255,.98))] p-4 shadow-[0_14px_32px_rgba(8,31,61,.04)]">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[16px] border border-[#e2edf8] bg-[#f6faff] text-[#0d4ea5]">
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </span>

        <div className="min-w-0">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#7b91ac]">
            {label}
          </div>

          <div
            className={cn(
              "mt-1.5 break-words text-[17px] font-semibold leading-6 text-[#0b2344]",
              valueClassName,
            )}
          >
            {value || "—"}
          </div>

          {hint ? (
            <div className="mt-1 text-[13px] leading-5 text-[#6681a4]">
              {hint}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TraitCard({ label, value, tone }) {
  return (
    <div className="rounded-[22px] border border-[#dce8f4] bg-white/90 p-4 shadow-[0_12px_28px_rgba(8,31,61,.04)]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[13px] font-semibold text-[#17375f]">{label}</div>
        <div className="font-[var(--font-display)] text-[1.6rem] leading-none tracking-[-0.04em] text-[#0b2344]">
          {value}
        </div>
      </div>

      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#e8f0f8]">
        <div
          className={cn("h-full rounded-full bg-gradient-to-r", tone.line)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function HeroPosterRings({ ringClass, glowClass }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[16px] bottom-[46px] z-[1] flex items-center justify-center">
      <div className="relative h-[154px] w-[154px]">
        <div className={cn("absolute inset-0 rounded-full border", ringClass)} />
        <div
          className={cn("absolute inset-[18px] rounded-full border", ringClass)}
        />
        <div
          className={cn("absolute inset-[40px] rounded-full border", ringClass)}
        />
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

function HeroPlayerPoster({ player, tone, photoBroken, onPhotoError }) {
  const photo = player.photo_url || "";

  return (
    <div
      className={cn(
        "relative h-[286px] overflow-hidden rounded-[24px] border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,.55)] sm:h-[320px] md:h-[340px]",
        tone.posterBg,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.72),transparent_44%)]" />

      <div
        className={cn(
          "absolute right-4 top-0 z-[5] font-[var(--font-display)] text-[92px] leading-none tracking-[-0.08em] sm:text-[104px]",
          tone.numberClass,
        )}
      >
        {player.number || ""}
      </div>

      <HeroPosterRings ringClass={tone.ringClass} glowClass={tone.glowClass} />

      <div className="absolute inset-x-3 bottom-0 z-[3] h-1.5 overflow-hidden rounded-full">
        <div className={cn("h-full w-full bg-gradient-to-r", tone.line)} />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[1] h-20 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.14))]" />

      {!photoBroken && photo ? (
        <div className="absolute inset-x-0 bottom-0 top-0 z-[2] flex items-end justify-center px-4 pt-4">
          <img
            src={photo}
            alt={player.full_name}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={onPhotoError}
            className="max-h-[99%] w-auto max-w-[92%] object-contain object-bottom drop-shadow-[0_18px_30px_rgba(3,16,38,.16)]"
          />
        </div>
      ) : (
        <span className="grid h-full place-items-center font-[var(--font-display)] text-5xl text-[#0d4ea5]">
          {player.initials}
        </span>
      )}
    </div>
  );
}

export default function PlayerPage() {
  const { playerSlug } = useParams();
  const { data } = usePageData();
  const [photoBroken, setPhotoBroken] = useState(false);

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

  useEffect(() => {
    setPhotoBroken(false);
  }, [player?.photo_url]);

  if (!player) {
    return (
      <Navigate
        to="/error/"
        replace
        state={{ type: "not-found", title: "Игрок не найден" }}
      />
    );
  }

  const tone = getPlayerTone(player);
  const heroStats = getHeroStats(player);

  const relatedPlayers = allPlayers
    .filter(
      (item) =>
        item.slug !== player.slug &&
        resolvePositionKey(item.position) === resolvePositionKey(player.position),
    )
    .sort((a, b) => {
      const featuredDelta =
        Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDelta !== 0) return featuredDelta;

      const captainDelta =
        Number(Boolean(b.captain)) - Number(Boolean(a.captain));
      if (captainDelta !== 0) return captainDelta;

      return (a.sort_order ?? 999) - (b.sort_order ?? 999);
    })
    .slice(0, 3);

  const traits = buildPlayerTraits(player);
  const biography = buildBiography(player);

  return (
    <>
      <Reveal y={16} duration={0.42}>
        <section className="mt-3">
          <Surface
            padding="none"
            radius="2xl"
            className={cn(
              "overflow-hidden border-[#dce8f4] shadow-[0_24px_62px_rgba(56,99,146,.12)]",
              tone.heroBg,
            )}
          >
            <div className="relative px-4 py-4 md:px-6 md:py-5 xl:px-8 xl:py-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,197,255,.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,.76),transparent_30%)]" />

              <div className="relative z-[1] text-center">
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <HeroPill className={tone.chipClass}>
                    {player.position_label}
                  </HeroPill>

                  {player.captain ? (
                    <HeroPill className={tone.strongChipClass}>Капитан</HeroPill>
                  ) : null}
                </div>

                <h1 className="mx-auto mt-4 max-w-[9ch] font-[var(--font-display)] text-[clamp(2.35rem,4.4vw,4.2rem)] leading-[0.84] tracking-[-0.07em] text-[#0b2344]">
                  {player.full_name}
                </h1>

                <p className="mx-auto mt-3 max-w-[40ch] text-[14px] leading-6 text-[#5f7899]">
                  {player.place_of_birth
                    ? `Родился в ${player.place_of_birth}`
                    : "Игрок первой команды клуба."}
                </p>

                <div className="mx-auto mt-5 max-w-[360px] sm:max-w-[390px]">
                  <HeroPlayerPoster
                    player={player}
                    tone={tone}
                    photoBroken={photoBroken}
                    onPhotoError={() => setPhotoBroken(true)}
                  />
                </div>

                <div className="mx-auto mt-6 grid max-w-[900px] gap-3 md:grid-cols-3">
                  {heroStats.map((item) => (
                    <MainStatCard
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      tone={tone}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Surface>
        </section>
      </Reveal>

      <Reveal y={18} duration={0.45}>
        <section className="mt-8">
          <div className="grid gap-6">
            <Surface
              padding="lg"
              radius="xl"
              className="border-[#dce8f4] bg-[linear-gradient(180deg,rgba(255,255,255,.98),rgba(247,251,255,.98))] shadow-[0_16px_36px_rgba(8,31,61,.05)]"
            >
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0d4ea5]">
                  Профиль
                </div>
                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(2rem,3vw,2.85rem)] leading-[0.92] tracking-[-0.045em] text-[#0b2344]">
                  Игровые и биографические данные
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <InfoCard
                  icon={CalendarDays}
                  label="Дата рождения"
                  value={player.birth_date_label}
                  hint={player.age ? `${player.age} лет` : null}
                />

                <InfoCard
                  icon={MapPin}
                  label="Место рождения"
                  value={player.place_of_birth || "—"}
                />

                <InfoCard
                  icon={Flag}
                  label="Гражданство"
                  value={player.citizenship || "—"}
                  valueClassName="text-[15px] leading-5"
                />

                <InfoCard
                  icon={UserRound}
                  label="Предыдущий клуб"
                  value={player.previous_club || "—"}
                />

                <InfoCard
                  icon={Shield}
                  label="Позиция"
                  value={player.position_label}
                />

                <InfoCard
                  icon={Weight}
                  label="Антропометрия"
                  value={
                    [
                      player.height_cm ? `${player.height_cm} см` : null,
                      player.weight_kg ? `${player.weight_kg} кг` : null,
                    ].filter(Boolean).join(" · ") || "—"
                  }
                />
              </div>
            </Surface>

            <Surface
              padding="lg"
              radius="xl"
              className="border-[#dce8f4] bg-[linear-gradient(180deg,rgba(255,255,255,.98),rgba(248,251,255,.98))] shadow-[0_16px_36px_rgba(8,31,61,.05)]"
            >
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0d4ea5]">
                  Игровой профиль
                </div>
                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(1.8rem,2.6vw,2.5rem)] leading-[0.92] tracking-[-0.045em] text-[#0b2344]">
                  Ключевые качества
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {traits.map((trait) => (
                  <TraitCard
                    key={trait.label}
                    label={trait.label}
                    value={trait.value}
                    tone={tone}
                  />
                ))}
              </div>
            </Surface>

            <Surface
              padding="lg"
              radius="xl"
              className="border-[#dce8f4] bg-[linear-gradient(180deg,rgba(255,255,255,.98),rgba(247,251,255,.98))] shadow-[0_16px_36px_rgba(8,31,61,.05)]"
            >
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0d4ea5]">
                  Биография
                </div>
                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(1.8rem,2.6vw,2.5rem)] leading-[0.92] tracking-[-0.045em] text-[#0b2344]">
                  О игроке
                </h2>
              </div>

              <div className="mt-5 grid gap-4">
                {biography.map((paragraph, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-[#dce8f4] bg-[#f8fbff] p-5"
                  >
                    <p className="text-[15px] leading-8 text-[#5f7899]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </section>
      </Reveal>

      {relatedPlayers.length ? (
        <Reveal y={18} duration={0.45}>
          <section className="mt-8">
            <div className="mb-5 rounded-[24px] border border-[#dce8f4] bg-white/82 p-4 shadow-[0_14px_34px_rgba(8,31,61,.05)] backdrop-blur-md">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0d4ea5]">
                  Эта же линия
                </div>
                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(1.8rem,2.6vw,2.5rem)] leading-[0.92] tracking-[-0.045em] text-[#223a5b]">
                  Ещё {resolvePositionPlural(player.position).toLowerCase()}
                </h2>
              </div>

              <div className="mt-3.5 h-[3px] overflow-hidden rounded-full bg-[#dbe9f7]">
                <div
                  className={cn(
                    "h-full w-[180px] rounded-full bg-gradient-to-r",
                    tone.line,
                  )}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {relatedPlayers.map((item) => (
                <TeamPlayerCard
                  key={item.slug || item.full_name}
                  player={item}
                  to={`/team/${item.slug}/`}
                />
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}
    </>
  );
}