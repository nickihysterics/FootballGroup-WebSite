import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/shared/lib/cn.js";
import usePageData from "@/features/page-data/usePageData.js";
import Reveal from "@/shared/ui/Reveal/Reveal.jsx";
import Surface from "@/shared/ui/Surface/Surface.jsx";
import TeamPlayerCard from "@/shared/ui/Card/TeamPlayerCard.jsx";

const POSITION_ORDER = {
  GK: 1,
  DF: 2,
  MF: 3,
  FW: 4,
};

function resolvePositionLabel(position) {
  const raw = String(position || "").toUpperCase();

  if (raw === "GK") return "Вратарь";
  if (raw === "DF") return "Защитник";
  if (raw === "MF") return "Полузащитник";
  if (raw === "FW") return "Нападающий";

  return position || "Игрок";
}

function resolvePositionKey(value) {
  const raw = String(value || "").toUpperCase();

  if (raw.includes("GK") || raw.includes("ВРАТ")) return "GK";
  if (raw.includes("DF") || raw.includes("ЗАЩ")) return "DF";
  if (raw.includes("MF") || raw.includes("ПОЛУ")) return "MF";
  if (raw.includes("FW") || raw.includes("НАП")) return "FW";

  return "FW";
}

function initialsOf(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
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
    slug: resolveSlug(player),
    photo_url: player.photo_url || player.remote_photo_url || "",
    number: player.number ?? "",
    position: resolvePositionKey(player.position),
    position_label:
      player.position_label || resolvePositionLabel(player.position),
    matches_for_club: player.matches_for_club ?? 0,
    minutes_for_club: player.minutes_for_club ?? 0,
    goals_for_club: player.goals_for_club ?? 0,
    citizenship: player.citizenship || "",
    birth_date_label:
      player.birth_date_label || formatBirthDateRu(player.birth_date),
    previous_club: player.previous_club || "—",
    initials: player.initials || initialsOf(player.full_name),
    age: player.age ?? null,
    captain: Boolean(player.captain),
  };
}

function getGroupMeta(group) {
  const key = resolvePositionKey(group?.key || group?.label);

  if (key === "GK") {
    return {
      short: "GK",
      label: "Вратарь",
      chipClass:
        "border-sky-200/90 bg-white text-sky-700 shadow-[0_12px_24px_rgba(59,130,246,.08)] hover:border-sky-300 hover:bg-sky-50/75",
      iconWrapClass: "bg-sky-50 text-sky-700 ring-1 ring-sky-200/80",
      countClass: "bg-sky-600 text-white",
      lineClass: "from-sky-500 via-cyan-400 to-transparent",
    };
  }

  if (key === "DF") {
    return {
      short: "DF",
      label: "Защитник",
      chipClass:
        "border-indigo-200/90 bg-white text-indigo-700 shadow-[0_12px_24px_rgba(99,102,241,.08)] hover:border-indigo-300 hover:bg-indigo-50/70",
      iconWrapClass: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/80",
      countClass: "bg-indigo-600 text-white",
      lineClass: "from-indigo-500 via-blue-400 to-transparent",
    };
  }

  if (key === "MF") {
    return {
      short: "MF",
      label: "Полузащитник",
      chipClass:
        "border-violet-200/90 bg-white text-violet-700 shadow-[0_12px_24px_rgba(139,92,246,.08)] hover:border-violet-300 hover:bg-violet-50/70",
      iconWrapClass: "bg-violet-50 text-violet-700 ring-1 ring-violet-200/80",
      countClass: "bg-violet-600 text-white",
      lineClass: "from-violet-500 via-fuchsia-400 to-transparent",
    };
  }

  return {
    short: "FW",
    label: "Нападающий",
    chipClass:
      "border-amber-200/90 bg-white text-amber-700 shadow-[0_12px_24px_rgba(245,158,11,.08)] hover:border-amber-300 hover:bg-amber-50/70",
    iconWrapClass: "bg-amber-50 text-amber-700 ring-1 ring-amber-200/80",
    countClass: "bg-amber-500 text-white",
    lineClass: "from-amber-500 via-orange-400 to-transparent",
  };
}

function PositionGlyph({ code, className = "h-[18px] w-[18px]" }) {
  const baseProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    className: cn(className),
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (code === "GK") {
    return (
      <svg {...baseProps}>
        <path d="M5.5 18.5V7.25c0-.97.78-1.75 1.75-1.75h9.5c.97 0 1.75.78 1.75 1.75V18.5" />
        <path d="M8.5 18.5V9" />
        <path d="M15.5 18.5V9" />
        <path d="M8.5 9h7" />
        <circle cx="12" cy="13.25" r="2.25" />
      </svg>
    );
  }

  if (code === "DF") {
    return (
      <svg {...baseProps}>
        <path d="M12 3.5 18.5 6v5.35c0 3.95-2.45 7.2-6.5 9.15-4.05-1.95-6.5-5.2-6.5-9.15V6L12 3.5Z" />
        <path d="M12 8v8" />
        <path d="M8.9 12h6.2" />
      </svg>
    );
  }

  if (code === "MF") {
    return (
      <svg {...baseProps}>
        <circle cx="12" cy="12" r="2.75" />
        <path d="M12 4.5v2.5" />
        <path d="M12 17v2.5" />
        <path d="M4.5 12H7" />
        <path d="M17 12h2.5" />
        <path d="m6.8 6.8 1.8 1.8" />
        <path d="m15.4 15.4 1.8 1.8" />
        <path d="m17.2 6.8-1.8 1.8" />
        <path d="m8.6 15.4-1.8 1.8" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <circle cx="12" cy="12" r="7.25" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M12 4.75v2" />
      <path d="M19.25 12h-2" />
      <path d="M12 19.25v-2" />
      <path d="M4.75 12h2" />
    </svg>
  );
}

function buildVisibleGroups(data) {
  const rawGroups =
    Array.isArray(data?.groups) && data.groups.length ? data.groups : null;

  if (rawGroups) {
    return rawGroups
      .map((group, index) => {
        const resolvedKey = resolvePositionKey(
          group?.key || group?.label || group?.players?.[0]?.position,
        );

        return {
          ...group,
          key: resolvedKey,
          label: group?.label || resolvePositionLabel(resolvedKey),
          anchorId: `team-group-${resolvedKey.toLowerCase()}-${index + 1}`,
          players: Array.isArray(group?.players)
            ? group.players.map(normalizePlayer).filter(Boolean)
            : [],
        };
      })
      .filter((group) => group.players.length > 0)
      .sort(
        (a, b) =>
          (POSITION_ORDER[resolvePositionKey(a.key)] || 99) -
          (POSITION_ORDER[resolvePositionKey(b.key)] || 99),
      );
  }

  const players = Array.isArray(data?.players) ? data.players : [];
  const bucket = new Map();

  players
    .map(normalizePlayer)
    .filter(Boolean)
    .forEach((player) => {
      const key = resolvePositionKey(player.position);

      if (!bucket.has(key)) {
        bucket.set(key, {
          key,
          label: resolvePositionLabel(key),
          anchorId: `team-group-${key.toLowerCase()}`,
          players: [],
        });
      }

      bucket.get(key).players.push(player);
    });

  return [...bucket.values()]
    .map((group) => ({
      ...group,
      players: [...group.players].sort(
        (a, b) => (a.sort_order ?? 999) - (b.sort_order ?? 999),
      ),
    }))
    .sort(
      (a, b) =>
        (POSITION_ORDER[resolvePositionKey(a.key)] || 99) -
        (POSITION_ORDER[resolvePositionKey(b.key)] || 99),
    );
}

function scrollToGroup(anchorId) {
  const element = document.getElementById(anchorId);
  if (!element) return;

  const offset = 110;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

function SquadNavChip({ group, anchorId }) {
  const meta = getGroupMeta(group);

  return (
    <button
      type="button"
      onClick={() => scrollToGroup(anchorId)}
      className={cn(
        "group inline-flex min-h-[74px] cursor-pointer items-center gap-3 rounded-[22px] border px-4 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(8,31,61,.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d4ea5]/20 md:min-h-[78px] md:px-5",
        meta.chipClass,
      )}
    >
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-[16px] transition-transform duration-300 group-hover:scale-[1.05]",
          meta.iconWrapClass,
        )}
      >
        <PositionGlyph code={meta.short} className="h-5 w-5" />
      </span>

      <span className={cn("flex min-w-0 flex-col")}>
        <span
          className={cn(
            "text-[10px] font-extrabold uppercase tracking-[0.18em] opacity-60",
          )}
        >
          {meta.short}
        </span>

        <span className={cn("mt-1 text-[15px] font-semibold leading-none md:text-[16px]")}>
          {group.label}
        </span>
      </span>

      <span
        className={cn(
          "ml-1 inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-[13px] font-bold shadow-[0_6px_14px_rgba(8,31,61,.10)]",
          meta.countClass,
        )}
      >
        {group.players.length}
      </span>
    </button>
  );
}

function HeroStat({ label, value, hint, className }) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-[#d7e6f4] bg-white/90 px-4 py-4 shadow-[0_12px_26px_rgba(8,31,61,.05)]",
        className,
      )}
    >
      <div
        className={cn(
          "text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7b91ac]",
        )}
      >
        {label}
      </div>

      <div
        className={cn(
          "mt-2 font-[var(--font-display)] text-[clamp(1.7rem,2.4vw,2.35rem)] leading-none tracking-[-0.045em] text-[#0b2344]",
        )}
      >
        {value}
      </div>

      {hint ? (
        <div className={cn("mt-1.5 text-[12px] leading-5 text-[#6982a3]")}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function CaptainMetric({ label, value }) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.06))] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/46",
        )}
      >
        {label}
      </div>

      <div
        className={cn(
          "mt-2 font-[var(--font-display)] text-[2rem] leading-none tracking-[-0.055em] text-white",
        )}
      >
        {value}
      </div>
    </div>
  );
}

function HeroPosterRings() {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-[18px] bottom-[18px] z-[1] flex items-center justify-center",
      )}
    >
      <div className={cn("relative h-[208px] w-[208px]")}>
        <div className={cn("absolute inset-0 rounded-full border border-white/10")} />
        <div className={cn("absolute inset-[24px] rounded-full border border-white/8")} />
        <div className={cn("absolute inset-[50px] rounded-full border border-white/7")} />
        <div
          className={cn(
            "absolute inset-[36px] rounded-full bg-cyan-200/12 blur-2xl",
          )}
        />
      </div>
    </div>
  );
}

function CaptainSpotlight({ captain, href }) {
  if (!captain) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[430px] items-center justify-center rounded-[32px] bg-[linear-gradient(180deg,#1557ad_0%,#0d3f80_34%,#0a2f63_68%,#082349_100%)] p-8 text-center text-white/72",
        )}
      >
        Капитан пока не указан
      </div>
    );
  }

  const photo = captain.photo_url || "";
  const positionLabel = captain.position_label || "Игрок";
  const metaLine = [positionLabel, captain.citizenship]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link to={href} className={cn("group block h-full")}>
      <div
        className={cn(
          "relative h-full min-h-[460px] overflow-hidden rounded-[32px] border border-[#0d4ea5]/15 bg-[linear-gradient(180deg,#1557ad_0%,#0d3f80_34%,#0a2f63_68%,#082349_100%)] shadow-[0_24px_60px_rgba(8,31,61,.18)] xl:min-h-[430px]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(137,219,255,.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,.08),transparent_26%)]",
          )}
        />

        <div
          className={cn(
            "pointer-events-none absolute left-0 top-[18%] h-[240px] w-[120px] bg-[#8fdcff]/[0.12] blur-3xl",
          )}
        />

        <div
          className={cn(
            "relative h-[clamp(18.5rem,36vw,25rem)] overflow-hidden min-[571px]:max-xl:h-[26.25rem] xl:h-[clamp(18.5rem,36vw,25rem)]",
          )}
        >
          <span
            className={cn(
              "absolute left-4 top-4 z-[6] inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/12 px-3.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md",
            )}
          >
            Капитан
          </span>

          <div
            className={cn(
              "absolute right-4 top-0 z-[5] font-[var(--font-display)] text-[94px] leading-none tracking-[-0.08em] text-white/10",
            )}
          >
            {captain.number ? String(captain.number) : ""}
          </div>

          <HeroPosterRings />

          <div
            className={cn(
              "absolute inset-x-0 bottom-0 z-[2] h-28 bg-[linear-gradient(180deg,transparent,rgba(7,24,50,.28)_48%,rgba(7,24,50,.56)_100%)]",
            )}
          />

          {photo ? (
            <div className={cn("absolute inset-0 z-[3] overflow-hidden")}>
              <div
                className={cn(
                  "absolute inset-x-0 top-1 bottom-0 flex items-start justify-center px-4 md:px-5 min-[571px]:max-xl:top-5",
                )}
              >
                <img
                  src={photo}
                  alt={captain.full_name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className={cn(
                    "pointer-events-none block h-[118%] w-auto max-w-none select-none drop-shadow-[0_18px_30px_rgba(3,16,38,.22)] transition duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015] min-[571px]:max-xl:h-[108%] min-[571px]:max-xl:group-hover:-translate-y-0.5",
                  )}
                />
              </div>
            </div>
          ) : (
            <span
              className={cn(
                "grid h-full place-items-center font-[var(--font-display)] text-6xl text-white/72",
              )}
            >
              {captain.initials}
            </span>
          )}
        </div>

        <div className={cn("relative z-[4] -mt-6 px-4 md:px-5")}>
          <div className={cn("grid grid-cols-3 gap-2.5")}>
            <CaptainMetric label="Матчи" value={captain.matches_for_club} />
            <CaptainMetric label="Минуты" value={captain.minutes_for_club} />
            <CaptainMetric label="Голы" value={captain.goals_for_club} />
          </div>
        </div>

        <div className={cn("relative z-[3] px-4 pb-4 pt-3 md:px-5 md:pb-5")}>
          <div
            className={cn(
              "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.05))] p-5 shadow-[0_18px_44px_rgba(3,16,38,.22)] backdrop-blur-xl",
            )}
          >
            <div className={cn("flex items-start justify-between gap-4")}>
              <h2
                className={cn(
                  "max-w-[8ch] font-[var(--font-display)] text-[clamp(2rem,3vw,3.15rem)] leading-[0.9] tracking-[-0.055em] text-white",
                )}
              >
                {captain.full_name}
              </h2>

              <span
                className={cn(
                  "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-white/88 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/[0.14]",
                )}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
              </span>
            </div>

            <p
              className={cn("mt-2.5 text-[14px] font-medium leading-6 text-white/72")}
            >
              {metaLine || "Игрок первой команды"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TeamPage() {
  const { data } = usePageData();

  const visibleGroups = buildVisibleGroups(data);
  const flatPlayers = visibleGroups.flatMap((group) => group.players);

  const captain =
    normalizePlayer(data?.captain) ||
    flatPlayers.find((player) => player?.captain) ||
    null;

  const totalPlayers = flatPlayers.length;
  const ageValues = flatPlayers
    .map((player) => Number(player.age))
    .filter((value) => Number.isFinite(value) && value > 0);

  const averageAge = ageValues.length
    ? Math.round(
        ageValues.reduce((sum, value) => sum + value, 0) / ageValues.length,
      )
    : null;

  const captainHref = captain ? `/team/${captain.slug}/` : "/team/";

  return (
    <>
      <Reveal y={16} duration={0.42}>
        <section className={cn("mt-3")}>
          <Surface
            padding="none"
            radius="2xl"
            className={cn(
              "overflow-hidden border-[#d9e7f4] bg-[linear-gradient(180deg,rgba(249,252,255,.96)_0%,rgba(237,245,253,.98)_100%)] shadow-[0_24px_62px_rgba(56,99,146,.12)]",
            )}
          >
            <div className={cn("relative grid xl:grid-cols-[minmax(0,1fr)_402px]")}>
              <div className={cn("relative p-6 md:p-7 xl:p-8 xl:pr-7")}>
                <div
                  className={cn(
                    "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,197,255,.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,.72),transparent_28%)]",
                  )}
                />

                <div
                  className={cn(
                    "pointer-events-none absolute inset-y-0 right-0 hidden w-[140px] xl:block bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.88)_48%,rgba(213,231,247,.58)_78%,transparent)]",
                  )}
                />
                <div
                  className={cn(
                    "pointer-events-none absolute right-0 top-[18%] hidden h-[260px] w-[110px] xl:block bg-[#8fdcff]/[0.14] blur-3xl",
                  )}
                />

                <div
                  className={cn(
                    "pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block",
                  )}
                >
                  <div
                    className={cn(
                      "relative h-[210px] w-[210px] rounded-full border border-[#0d4ea5]/[0.035]",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute left-6 top-6 h-[158px] w-[158px] rounded-full border border-[#0d4ea5]/[0.03]",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute left-12 top-12 h-[106px] w-[106px] rounded-full border border-[#0d4ea5]/[0.025]",
                    )}
                  />
                </div>

                <div className={cn("relative z-[1]")}>
                  <div
                    className={cn(
                      "inline-flex min-h-10 items-center rounded-full border border-white/70 bg-white/75 px-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0d4ea5] shadow-[0_10px_24px_rgba(8,31,61,.04)] backdrop-blur-md",
                    )}
                  >
                    Первая команда
                  </div>

                  <h1
                    className={cn(
                      "mt-4 max-w-[6ch] font-[var(--font-display)] text-[clamp(2.85rem,5vw,5.05rem)] leading-[0.84] tracking-[-0.065em] text-[#0b2344]",
                    )}
                  >
                    Состав команды
                  </h1>

                  <p
                    className={cn(
                      "mt-4 max-w-[48ch] text-[15px] leading-7 text-[#5f7899]",
                    )}
                  >
                    Игроки первой команды «Зенита» — состав клуба по игровым
                    линиям.
                  </p>

                  <div className={cn("mt-7 flex flex-wrap gap-3")}>
                    {visibleGroups.map((group) => (
                      <SquadNavChip
                        key={group.anchorId}
                        group={group}
                        anchorId={group.anchorId}
                      />
                    ))}
                  </div>

                  <div className={cn("mt-7 grid gap-3 md:grid-cols-3")}>
                    <HeroStat label="Игроков" value={totalPlayers} />
                    <HeroStat label="Линий состава" value={visibleGroups.length} />
                    <HeroStat
                      label="Средний возраст"
                      value={averageAge ? String(averageAge) : "—"}
                      hint={averageAge ? "лет" : null}
                    />
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative border-t border-white/70 p-3 xl:border-t-0 xl:p-3.5 xl:pl-1.5",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-y-6 left-0 hidden w-[52px] xl:block bg-[linear-gradient(90deg,rgba(255,255,255,.72),transparent)]",
                  )}
                />
                <div
                  className={cn(
                    "pointer-events-none absolute left-0 top-[20%] hidden h-[220px] w-[68px] xl:block bg-[#84d2ff]/[0.16] blur-2xl",
                  )}
                />
                <CaptainSpotlight captain={captain} href={captainHref} />
              </div>
            </div>
          </Surface>
        </section>
      </Reveal>

      {visibleGroups.map((group, index) => {
        const meta = getGroupMeta(group);

        return (
          <Reveal
            key={group.anchorId}
            y={18}
            duration={0.45}
            delay={Math.min(index * 0.04, 0.16)}
          >
            <section id={group.anchorId} className={cn("mt-8 scroll-mt-28")}>
              <div
                className={cn(
                  "mb-5 rounded-[24px] border border-[#dce8f4] bg-white/80 p-4 shadow-[0_14px_34px_rgba(8,31,61,.05)] backdrop-blur-md",
                )}
              >
                <div className={cn("flex flex-wrap items-center gap-3")}>
                  <span
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-[18px]",
                      meta.iconWrapClass,
                    )}
                  >
                    <PositionGlyph code={meta.short} className="h-5 w-5" />
                  </span>

                  <div className={cn("min-w-0")}>
                    <div className={cn("flex flex-wrap items-center gap-2.5")}>
                      <span
                        className={cn(
                          "text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6f87a8]",
                        )}
                      >
                        {meta.short}
                      </span>

                      <span
                        className={cn(
                          "inline-flex min-h-7 items-center rounded-full border border-[#d9e8f6] bg-white px-2.5 text-[11px] font-semibold text-[#527197]",
                        )}
                      >
                        {group.players.length} игроков
                      </span>
                    </div>

                    <h2
                      className={cn(
                        "mt-1 font-[var(--font-display)] text-[clamp(1.7rem,2.6vw,2.5rem)] leading-[0.92] tracking-[-0.045em] text-[#223a5b]",
                      )}
                    >
                      {group.label}
                    </h2>
                  </div>
                </div>

                <div
                  className={cn(
                    "mt-3.5 h-[3px] overflow-hidden rounded-full bg-[#dbe9f7]",
                  )}
                >
                  <div
                    className={cn(
                      "h-full w-[180px] rounded-full bg-gradient-to-r",
                      meta.lineClass,
                    )}
                  />
                </div>
              </div>

              <div className={cn("grid gap-5 sm:grid-cols-2 xl:grid-cols-3")}>
                {group.players.map((player) => (
                  <TeamPlayerCard
                    key={player.slug || player.full_name}
                    player={player}
                    to={`/team/${player.slug}/`}
                  />
                ))}
              </div>
            </section>
          </Reveal>
        );
      })}
    </>
  );
}