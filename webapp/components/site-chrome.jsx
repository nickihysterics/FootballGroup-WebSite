import { ArrowUpRight, CalendarDays, House, Mail, MapPin, Newspaper, Phone, ShoppingBag, Ticket, Users } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { cn } from "../src/lib/cn.js";
import { PAGE_ROUTES } from "../src/lib/routes.js";
import GazpromMark from "./gazprom-mark";

const NAV_ICONS = {
  home: House,
  team: Users,
  matches: CalendarDays,
  media: Newspaper,
  contacts: Phone,
};

export default function SiteChrome({ club, children }) {
  return (
    <div className="site-shell">
      <div className="site-shell__mesh" />
      <div className="site-shell__noise" />
      <div className="site-shell__glow site-shell__glow--left" />
      <div className="site-shell__glow site-shell__glow--right" />
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
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => cn("site-nav__link inline-flex items-center gap-2", isActive && "is-active")}
                >
                  {Icon ? <Icon className="h-4 w-4 shrink-0" strokeWidth={1.9} /> : null}
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="site-header__actions">
            {club.links.ticket_url ? (
              <a href={club.links.ticket_url} target="_blank" rel="noreferrer" className="button button--primary">
                <Ticket className="h-4 w-4" strokeWidth={1.9} />
                Билеты
              </a>
            ) : null}
            {club.links.hospitality_url ? (
              <a href={club.links.hospitality_url} target="_blank" rel="noreferrer" className="button button--ghost">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
                VIP-места
              </a>
            ) : club.links.shop_url ? (
              <a href={club.links.shop_url} target="_blank" rel="noreferrer" className="button button--ghost">
                <ShoppingBag className="h-4 w-4" strokeWidth={1.9} />
                Магазин
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <main className="page-shell">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <GazpromMark className="site-footer__mark" />
            <p className="eyebrow">ПАО «Газпром»</p>
            <h2>{club.name}</h2>
            <p>{club.mission}</p>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Арена</span>
            <strong>{club.stadium}</strong>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-400" strokeWidth={1.9} />
              <span>{club.city}</span>
            </p>
            <p>{club.address}</p>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Коммуникации</span>
            <a href={`mailto:${club.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-400" strokeWidth={1.9} />
              <span>{club.email}</span>
            </a>
            <a href={`tel:${club.phone}`} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-sky-400" strokeWidth={1.9} />
              <span>{club.phone}</span>
            </a>
            {club.links.telegram_url ? (
              <a href={club.links.telegram_url} target="_blank" rel="noreferrer">
                Telegram
              </a>
            ) : null}
            {club.links.vk_url ? (
              <a href={club.links.vk_url} target="_blank" rel="noreferrer">
                VK
              </a>
            ) : null}
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Маршруты</span>
            <Link to="/matches/">Матч-центр</Link>
            {club.links.membership_url ? (
              <a href={club.links.membership_url} target="_blank" rel="noreferrer">
                Абонементы
              </a>
            ) : null}
            {club.links.shop_url ? (
              <a href={club.links.shop_url} target="_blank" rel="noreferrer">
                Магазин
              </a>
            ) : null}
            {club.links.hospitality_url ? (
              <a href={club.links.hospitality_url} target="_blank" rel="noreferrer">
                Hospitality
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  );
}
