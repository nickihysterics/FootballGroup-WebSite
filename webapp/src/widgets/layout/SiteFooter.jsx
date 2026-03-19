import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import GazpromMark from "@/shared/ui/BrandMark/GazpromMark.jsx";

export default function SiteFooter({ club }) {
  return (
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

          {club.email ? (
            <a href={`mailto:${club.email}`} className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-400" strokeWidth={1.9} />
              <span>{club.email}</span>
            </a>
          ) : null}

          {club.phone ? (
            <a href={`tel:${club.phone}`} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-sky-400" strokeWidth={1.9} />
              <span>{club.phone}</span>
            </a>
          ) : null}

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
  );
}