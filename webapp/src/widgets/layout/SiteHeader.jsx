import {
  ArrowUpRight,
  CalendarDays,
  House,
  Newspaper,
  Phone,
  ShoppingBag,
  Ticket,
  Users,
} from "lucide-react";
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

export default function SiteHeader({ club }) {
  return (
    <header className="site-header">
      <div className="site-header__utility">
        <span className="utility-pill">ПАО «Газпром»</span>
        <span className="utility-pill utility-pill--ghost">{club.stadium}</span>
        <span className="utility-pill utility-pill--ghost">{club.city}</span>
      </div>

      <div className="site-header__inner">
        <Link to="/" className="brand-mark" aria-label="На главную">
          <span className="brand-mark__emblem">
            <GazpromMark className="brand-mark__symbol" />
          </span>
          <span className="brand-mark__copy">
            <strong>{club.short_name}</strong>
            <span>{club.hero_badge}</span>
          </span>
        </Link>

        <nav className="site-nav">
          {PAGE_ROUTES.map((item) => {
            const Icon = NAV_ICONS[item.page];

            return (
              <NavLink
                key={item.page}
                to={item.path}
                className={({ isActive }) =>
                  cn("site-nav__link inline-flex items-center gap-2", isActive && "is-active")
                }
              >
                {Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={1.9} /> : null}
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="site-header__actions">
          {club.links.ticket_url ? (
            <Button
              as="a"
              href={club.links.ticket_url}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              leftIcon={Ticket}
            >
              Билеты
            </Button>
          ) : null}

          {club.links.hospitality_url ? (
            <Button
              as="a"
              href={club.links.hospitality_url}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              leftIcon={ArrowUpRight}
            >
              VIP-места
            </Button>
          ) : club.links.shop_url ? (
            <Button
              as="a"
              href={club.links.shop_url}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              leftIcon={ShoppingBag}
            >
              Магазин
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
}