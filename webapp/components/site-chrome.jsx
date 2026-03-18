import GazpromMark from "./gazprom-mark";

const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/team/", label: "Команда" },
  { href: "/matches/", label: "Матчи" },
  { href: "/media/", label: "Медиа" },
  { href: "/contacts/", label: "Контакты" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(href);
}

export default function SiteChrome({ club, pathname, children }) {
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
          <a href="/" className="brand-mark" aria-label="На главную">
            <span className="brand-mark__emblem">
              <GazpromMark className="brand-mark__symbol" />
            </span>
            <span className="brand-mark__copy">
              <strong>{club.short_name}</strong>
              <span>{club.hero_badge}</span>
            </span>
          </a>
          <nav className="site-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={isActive(pathname, item.href) ? "site-nav__link is-active" : "site-nav__link"}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-header__actions">
            {club.links.ticket_url ? (
              <a href={club.links.ticket_url} target="_blank" rel="noreferrer" className="button button--primary">
                Билеты
              </a>
            ) : null}
            {club.links.hospitality_url ? (
              <a href={club.links.hospitality_url} target="_blank" rel="noreferrer" className="button button--ghost">
                VIP-места
              </a>
            ) : club.links.shop_url ? (
              <a href={club.links.shop_url} target="_blank" rel="noreferrer" className="button button--ghost">
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
            <p>{club.city}</p>
            <p>{club.address}</p>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Коммуникации</span>
            <a href={`mailto:${club.email}`}>{club.email}</a>
            <a href={`tel:${club.phone}`}>{club.phone}</a>
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
            <a href="/matches/">Матч-центр</a>
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
