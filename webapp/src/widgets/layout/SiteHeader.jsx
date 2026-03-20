import {
  CalendarDays,
  ChevronRight,
  Crown,
  House,
  Menu,
  Newspaper,
  Phone,
  ShoppingBag,
  Ticket,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { PAGE_ROUTES } from "@/app/router/pageRoutes.js";
import { cn } from "@/shared/lib/cn.js";
import GazpromMark from "@/shared/ui/BrandMark/GazpromMark.jsx";
import Button from "@/shared/ui/Button/Button.jsx";

const NAV_ICONS = {
  home: House,
  team: Users,
  matches: CalendarDays,
  media: Newspaper,
  contacts: Phone,
};

function DesktopNavItem({ item }) {
  const Icon = NAV_ICONS[item.page];

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        cn(
          "group inline-flex h-10 items-center gap-2 rounded-[15px] px-4 text-[14px] font-semibold transition-all duration-200",
          isActive
            ? "bg-white text-[#0f4ea8] shadow-[0_7px_18px_rgba(18,76,154,.08)] ring-1 ring-[#dbe8f7]"
            : "text-[#203555] hover:bg-white/85 hover:text-[#102544]",
        )
      }
    >
      {({ isActive }) => (
        <>
          {Icon ? (
            <Icon
              className={cn(
                "h-4 w-4 shrink-0 transition duration-200",
                isActive ? "text-[#0f4ea8]" : "text-[#6a7d98]",
              )}
              strokeWidth={1.9}
            />
          ) : null}
          <span>{item.label}</span>
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ item, onClick }) {
  const Icon = NAV_ICONS[item.page];

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "group flex items-center justify-between rounded-[18px] border px-4 py-3 transition-all duration-200",
          isActive
            ? "border-[#b9d7fb] bg-[#eef6ff] text-[#0f4ea8]"
            : "border-[#d9e5f2] bg-white/90 text-[#1b3152] hover:border-[#c7d9ef] hover:bg-white",
        )
      }
    >
      <span className="flex items-center gap-3">
        {Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={1.9} /> : null}
        <span className="text-[15px] font-semibold">{item.label}</span>
      </span>

      <ChevronRight className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5" />
    </NavLink>
  );
}

function BrandBlock({ club, compact = false }) {
  const brandTitle = club?.short_name || club?.name || "Газпром / Зенит";

  const brandLine = [
    club?.hero_badge || club?.tagline || "Газпром футбольная программа",
    club?.stadium,
    club?.city,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <Link
      to="/"
      aria-label="На главную"
      className={cn(
        "group flex min-w-0 items-center text-left",
        compact ? "gap-3" : "gap-3",
      )}
    >
      <span className="relative flex shrink-0 items-center justify-center">
        <span
          className={cn(
            "absolute rounded-full bg-[radial-gradient(circle,rgba(73,153,255,.10)_0%,rgba(73,153,255,0)_72%)] blur-2xl",
            compact ? "h-11 w-11" : "h-12 w-12",
          )}
        />
        <GazpromMark
          className={cn(
            "relative w-auto text-[#0f5ec6] transition-transform duration-300 group-hover:scale-[1.02]",
            compact ? "h-8 sm:h-9" : "h-9",
          )}
        />
      </span>

      <span className="min-w-0">
        <span
          className={cn(
            "block truncate font-bold leading-tight text-[#102544]",
            compact ? "text-[17px] sm:text-[18px]" : "text-[18px]",
          )}
        >
          {brandTitle}
        </span>

        <span
          className={cn(
            "mt-0.5 block truncate font-medium text-[#6d7f99]",
            compact ? "text-[11.5px]" : "text-[12px]",
          )}
        >
          {brandLine}
        </span>
      </span>
    </Link>
  );
}

export default function SiteHeader({ club }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const primaryCta = club?.links?.ticket_url
    ? {
        href: club.links.ticket_url,
        label: "Купить билеты",
        icon: Ticket,
      }
    : null;

  const secondaryCta = club?.links?.hospitality_url
    ? {
        href: club.links.hospitality_url,
        label: "VIP-места",
        icon: Crown,
      }
    : club?.links?.shop_url
      ? {
          href: club.links.shop_url,
          label: "Магазин",
          icon: ShoppingBag,
        }
      : null;

  const mobileButtonOnlyLabel = useMemo(() => {
    return primaryCta?.label || "Билеты";
  }, [primaryCta]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 lg:px-5">
      <div className="mx-auto flex w-full justify-center">
        <div className="w-full xl:w-fit xl:max-w-[calc(100vw-40px)]">
          <div className="overflow-hidden rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(241,247,253,.96)_0%,rgba(231,240,248,.96)_100%)] shadow-[0_12px_30px_rgba(8,37,78,.10)] backdrop-blur-xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-34px] top-[-34px] h-24 w-24 rounded-full bg-sky-300/16 blur-3xl" />
                <div className="absolute right-[-16px] top-0 h-20 w-20 rounded-full bg-blue-300/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="hidden xl:block px-5 pb-4 pt-3.5">
                  <div className="flex items-center">
                    <BrandBlock club={club} />
                  </div>

                  <div className="mt-2.5 flex items-center gap-3">
                    <nav className="shrink-0">
                      <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-white/42 p-1.5 ring-1 ring-white/70">
                        {PAGE_ROUTES.map((item) => (
                          <DesktopNavItem key={item.page} item={item} />
                        ))}
                      </div>
                    </nav>

                    <div className="flex shrink-0 items-center gap-2">
                      {primaryCta ? (
                        <Button
                          as="a"
                          href={primaryCta.href}
                          target="_blank"
                          rel="noreferrer"
                          leftIcon={primaryCta.icon}
                          size="sm"
                          className="min-w-[168px] !min-h-10 px-4"
                        >
                          {primaryCta.label}
                        </Button>
                      ) : null}

                      {secondaryCta ? (
                        <Button
                          as="a"
                          href={secondaryCta.href}
                          target="_blank"
                          rel="noreferrer"
                          variant="ghost"
                          leftIcon={secondaryCta.icon}
                          size="sm"
                          className="min-w-[150px] !min-h-10 px-4"
                        >
                          {secondaryCta.label}
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="xl:hidden px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <BrandBlock club={club} compact />
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {primaryCta ? (
                        <>
                          <Button
                            as="a"
                            href={primaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            leftIcon={Ticket}
                            size="sm"
                            className="hidden min-w-[160px] !min-h-10 sm:inline-flex"
                          >
                            {primaryCta.label}
                          </Button>

                          <a
                            href={primaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={mobileButtonOnlyLabel}
                            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent bg-[linear-gradient(180deg,#1f95ff_0%,#0d61c2_100%)] text-white shadow-[0_12px_24px_rgba(13,97,194,.18)] sm:hidden"
                          >
                            <Ticket className="h-4 w-4" strokeWidth={1.9} />
                          </a>
                        </>
                      ) : null}

                      <button
                        type="button"
                        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className={cn(
                          "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-200",
                          menuOpen
                            ? "border-[#b9d7fb] bg-[#eaf4ff] text-[#0f4ea8] shadow-[0_8px_16px_rgba(14,76,164,.08)]"
                            : "border-[#d9e5f2] bg-white/90 text-[#1a3152] hover:bg-white",
                        )}
                      >
                        {menuOpen ? (
                          <X className="h-4.5 w-4.5" strokeWidth={2} />
                        ) : (
                          <Menu className="h-4.5 w-4.5" strokeWidth={2} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out xl:hidden",
              menuOpen ? "mt-3 max-h-[720px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="px-1 pb-1">
              <div className="rounded-[22px] border border-white/85 bg-[linear-gradient(180deg,rgba(242,247,253,.98)_0%,rgba(233,241,249,.98)_100%)] p-3 ring-1 ring-[#dbe8f7]/60">
                <div className="space-y-2.5">
                  {PAGE_ROUTES.map((item) => (
                    <MobileNavItem
                      key={item.page}
                      item={item}
                      onClick={() => setMenuOpen(false)}
                    />
                  ))}
                </div>

                {(primaryCta || secondaryCta) && (
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {primaryCta ? (
                      <Button
                        as="a"
                        href={primaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        leftIcon={primaryCta.icon}
                        fullWidth
                      >
                        {primaryCta.label}
                      </Button>
                    ) : null}

                    {secondaryCta ? (
                      <Button
                        as="a"
                        href={secondaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        variant="ghost"
                        leftIcon={secondaryCta.icon}
                        fullWidth
                        className="bg-white"
                      >
                        {secondaryCta.label}
                      </Button>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}