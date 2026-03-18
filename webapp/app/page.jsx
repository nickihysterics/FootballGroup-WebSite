import { Link } from "react-router-dom";

import CountdownChip from "../components/countdown-chip";
import StadiumScene from "../components/stadium-scene";

const statLabels = [
  ["Побед", "wins"],
  ["Голы", "goals"],
  ["Сухих матчей", "clean_sheets"],
];

export default function HomePage({ data }) {
  const { club, hero } = data;
  const leadStory = hero.featured_news[0];
  const visualImage = leadStory?.cover_url || hero.gallery_items[0]?.image_url || hero.featured_players[0]?.photo_url;
  const scheduleRail = hero.next_matches.slice(0, 3);
  const galleryRail = hero.gallery_items.slice(0, 4);
  const playerFocus = hero.featured_players[0];

  return (
    <>
      <section className="hero-shell">
        <div className="hero-shell__copy card">
          <div className="hero-shell__intro">
            <p className="eyebrow">{club.hero_badge}</p>
            <span className="hero-shell__origin">ПАО «Газпром»</span>
          </div>
          <div className="hero-shell__headline">
            <span className="hero-shell__season">2026</span>
            <h1>{club.tagline}</h1>
          </div>
          <p className="hero-shell__lead">{club.mission}</p>
          {hero.featured_match ? (
            <div className="hero-spotlight hero-spotlight--dark">
              <div className="hero-spotlight__meta">
                <span className="badge-chip badge-chip--bright">Следующий матч</span>
                <CountdownChip kickoffIso={hero.featured_match.kickoff_iso} />
              </div>
              <strong>
                {club.short_name} vs {hero.featured_match.opponent}
              </strong>
              <p>
                {hero.featured_match.competition} · {hero.featured_match.date_label} · {hero.featured_match.time_label}
              </p>
              <div className="hero-spotlight__footer">
                <Link to="/matches/" className="text-link">
                  Матч-центр
                </Link>
              </div>
            </div>
          ) : null}
          <div className="button-row">
            {club.links.ticket_url ? (
              <a href={club.links.ticket_url} target="_blank" rel="noreferrer" className="button button--primary">
                Купить билет
              </a>
            ) : null}
            {club.links.membership_url ? (
              <a href={club.links.membership_url} target="_blank" rel="noreferrer" className="button button--ghost">
                Абонементы
              </a>
            ) : null}
            {club.links.shop_url ? (
              <a href={club.links.shop_url} target="_blank" rel="noreferrer" className="button button--ghost">
                Магазин
              </a>
            ) : null}
          </div>
          <div className="metric-row">
            {statLabels.map(([label, key]) => (
              <article key={key} className="metric-card">
                <span>{label}</span>
                <strong>{club.stats[key]}</strong>
              </article>
            ))}
          </div>
          <div className="hero-schedule-rail">
            {scheduleRail.map((match) => (
              <article key={`${match.opponent}-${match.kickoff_iso}`} className="hero-match-pill">
                <span>{match.competition}</span>
                <strong>{match.opponent}</strong>
                <p>
                  {match.date_label} · {match.time_label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-shell__rail">
          <article className="hero-story">
            {visualImage ? <img src={visualImage} alt={leadStory?.title || club.short_name} /> : null}
            <div className="hero-story__overlay">
              <span className="eyebrow">Главная история недели</span>
              <h2>{leadStory?.title || "Кампания сезона вокруг арены и следующего матча"}</h2>
              <p>{leadStory?.excerpt || club.mission}</p>
            </div>
          </article>
          <div className="hero-shell__cards">
            {hero.latest_result ? (
              <article className="hero-spotlight">
                <span>Последний результат</span>
                <strong className="scoreline">
                  {hero.latest_result.score_for ?? "–"}:{hero.latest_result.score_against ?? "–"}
                </strong>
                <h3>{hero.latest_result.opponent}</h3>
                <p>{hero.latest_result.summary}</p>
              </article>
            ) : null}
            {playerFocus ? (
              <Link to="/team/" className="hero-spotlight hero-spotlight--light">
                <span>Игрок недели</span>
                <strong>{playerFocus.full_name}</strong>
                <p>
                  {playerFocus.position_label} · #{playerFocus.number} ·{" "}
                  {playerFocus.compact_profile || playerFocus.bio || "Один из лидеров первой команды в текущем цикле сезона."}
                </p>
                <div className="hero-spotlight__footer">
                  <span className="text-link">Открыть состав</span>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-block section-block--dark matchday-band">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Матчдэй</p>
          <h2>Матчдэй на «Газпром Арене»: билеты, hospitality и полный маршрут болельщика</h2>
        </div>
        <div className="matchday-band__layout">
          {hero.featured_match ? (
            <article className="matchday-band__feature">
              <div className="matchday-band__meta">
                <span className="badge-chip badge-chip--bright">Следующий матч</span>
                <CountdownChip kickoffIso={hero.featured_match.kickoff_iso} />
              </div>
              <h3>
                {club.short_name} vs {hero.featured_match.opponent}
              </h3>
              <p>{hero.featured_match.competition}</p>
              <dl className="matchday-band__facts">
                <div>
                  <dt>Дата</dt>
                  <dd>{hero.featured_match.date_label}</dd>
                </div>
                <div>
                  <dt>Время</dt>
                  <dd>{hero.featured_match.time_label}</dd>
                </div>
                <div>
                  <dt>Арена</dt>
                  <dd>{hero.featured_match.venue}</dd>
                </div>
              </dl>
              <div className="button-row">
                {club.links.ticket_url ? (
                  <a href={club.links.ticket_url} target="_blank" rel="noreferrer" className="button button--primary">
                    Билеты на матч
                  </a>
                ) : null}
                <Link to="/matches/" className="button button--ghost">
                  Полный календарь
                </Link>
              </div>
            </article>
          ) : null}

          {hero.latest_result ? (
            <article className="matchday-band__score">
              <span className="eyebrow">Последний результат</span>
              <strong className="scoreline">
                {hero.latest_result.score_for ?? "–"}:{hero.latest_result.score_against ?? "–"}
              </strong>
              <h3>{hero.latest_result.opponent}</h3>
              <p>{hero.latest_result.competition}</p>
              {hero.latest_result.source_url ? (
                <a href={hero.latest_result.source_url} target="_blank" rel="noreferrer" className="text-link">
                  Протокол матча
                </a>
              ) : null}
            </article>
          ) : null}
        </div>

        <div className="matchday-band__offers">
          {club.links.membership_url ? (
            <a href={club.links.membership_url} target="_blank" rel="noreferrer" className="offer-card">
              <span>Абонементы</span>
              <strong>Сезонный доступ</strong>
              <p>Приоритет на домашние матчи, клубные бонусы и единый сезонный маршрут болельщика.</p>
            </a>
          ) : null}
          {club.links.shop_url ? (
            <a href={club.links.shop_url} target="_blank" rel="noreferrer" className="offer-card offer-card--light">
              <span>Магазин</span>
              <strong>Официальная экипировка</strong>
              <p>Игровая форма, повседневные капсулы и фирменный мерч в одной коллекции сезона.</p>
            </a>
          ) : null}
          {club.links.hospitality_url ? (
            <a href={club.links.hospitality_url} target="_blank" rel="noreferrer" className="offer-card offer-card--outline">
              <span>Hospitality</span>
              <strong>Премиальные места</strong>
              <p>Ложи, бизнес-клуб и премиальные сценарии для партнёров и корпоративных гостей.</p>
            </a>
          ) : null}
        </div>
        <div className="ticker-row ticker-row--compact">
          {hero.match_hub.upcoming.map((item) => (
            <div key={`${item.opponent}-${item.kickoff_iso}`} className="ticker-pill">
              <strong>{item.opponent}</strong>
              <span>
                {item.date_label} · {item.time_label}
              </span>
            </div>
          ))}
          {hero.match_hub.recent.map((item) => (
            <div key={`${item.opponent}-${item.result_label}`} className="ticker-pill ticker-pill--muted">
              <strong>{item.opponent}</strong>
              <span>{item.result_label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block arena-showcase">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Арена</p>
          <h2>Арена как главный визуальный объект: свет, поле и матчевое напряжение без визуального шума</h2>
        </div>
        <div className="arena-showcase__grid">
          <div className="arena-stage card card--flush">
            <StadiumScene clubName={club.short_name} stadiumName={club.stadium} featuredMatch={hero.featured_match} />
            <div className="arena-lineup">
              {hero.lineup_players.map((player) => (
                <div key={player.id} className="arena-lineup__item">
                  <strong>{player.full_name}</strong>
                  <span>
                    #{player.number} · {player.position_label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="arena-showcase__stack">
            <article className="glass-panel glass-panel--deep">
              <span>Домашняя арена</span>
              <h3>{club.stadium}</h3>
              <p>{club.city} · домашние матчи, премиальные маршруты и главная футбольная площадка клубной системы.</p>
            </article>
            <article className="glass-panel">
              <span>Трофеи</span>
              <div className="trophy-list">
                {hero.trophies.map((trophy) => (
                  <div key={`${trophy.title}-${trophy.season}`} className="trophy-list__item">
                    <strong>{trophy.title}</strong>
                    <span>{trophy.season}</span>
                    <p>{trophy.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="glass-panel">
              <span>Матчдэй</span>
              <strong>
                {hero.featured_match ? `${hero.featured_match.date_label} · ${hero.featured_match.time_label}` : "Ближайший игровой слот"}
              </strong>
              <p>
                {hero.featured_match
                  ? `${club.short_name} vs ${hero.featured_match.opponent} · ${hero.featured_match.competition}`
                  : "Клуб всегда держит в центре внимания ближайший домашний матч и маршрут болельщика."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block squad-stage">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Состав</p>
          <h2>Ключевые игроки первой команды в крупной editorial-подаче</h2>
        </div>
        <div className="player-grid">
          {hero.featured_players.map((player) => (
            <article key={player.id} className="player-card">
              <div className="player-card__visual">
                {player.photo_url ? <img src={player.photo_url} alt={player.full_name} /> : <span>{player.initials}</span>}
                <span className="player-card__number">#{player.number}</span>
              </div>
              <div className="player-card__body">
                <span className="badge-chip">{player.position_label}</span>
                <h3>{player.full_name}</h3>
                <p>{player.bio || player.compact_profile || "Игровой профиль футболиста первой команды."}</p>
                <div className="player-card__stats">
                  <div>
                    <span>Матчи</span>
                    <strong>{player.matches_for_club}</strong>
                  </div>
                  <div>
                    <span>Минуты</span>
                    <strong>{player.minutes_for_club}</strong>
                  </div>
                  <div>
                    <span>Голы</span>
                    <strong>{player.goals_for_club}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-block--wide story-stage">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Медиа</p>
          <h2>Медиа клуба: новости недели, фотоистории и визуальный контур сезона</h2>
        </div>
        <div className="story-stage__grid">
          {hero.featured_news.map((story) => (
            <article key={story.id} className="story-card">
              {story.cover_url ? <img src={story.cover_url} alt={story.title} /> : null}
              <div className="story-card__overlay">
                <span>{story.published_label}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                {story.source_url ? (
                  <a href={story.source_url} target="_blank" rel="noreferrer" className="text-link">
                    Открыть источник
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="gallery-strip">
          {galleryRail.map((item) => (
            <article key={item.id} className="gallery-card">
              {item.image_url ? <img src={item.image_url} alt={item.title} /> : null}
              <div className="gallery-card__overlay">
                <span>{item.accent || item.category_label}</span>
                <strong>{item.title}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
