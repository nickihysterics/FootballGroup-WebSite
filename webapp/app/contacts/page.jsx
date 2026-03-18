import { getContactsData } from "../../lib/api";

export const metadata = {
  title: "Контакты | Газпром Футбол",
};

export default async function ContactsPage() {
  const { club, channels, recent_matches: recentMatches } = await getContactsData();
  const partnershipUrl = club.links.hospitality_url || club.links.membership_url || club.links.shop_url || club.source_url;

  return (
    <>
      <section className="page-banner">
        <div className="page-banner__copy card">
          <p className="eyebrow">Контакты</p>
          <h1>Официальный контактный контур клуба и арены</h1>
          <p>Официальные контакты клуба, арены и ключевых коммуникационных каналов на одной странице.</p>
        </div>
        <article className="contact-card">
          <span className="badge-chip">HQ</span>
          <h2>{club.name}</h2>
          <ul className="contact-list">
            <li>
              <span>Город</span>
              <strong>{club.city}</strong>
            </li>
            <li>
              <span>Арена</span>
              <strong>{club.stadium}</strong>
            </li>
            <li>
              <span>Адрес</span>
              <strong>{club.address}</strong>
            </li>
            <li>
              <span>Email</span>
              <strong>
                <a href={`mailto:${club.email}`}>{club.email}</a>
              </strong>
            </li>
            <li>
              <span>Телефон</span>
              <strong>
                <a href={`tel:${club.phone}`}>{club.phone}</a>
              </strong>
            </li>
          </ul>
        </article>
      </section>

      <section className="section-block contact-command">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Коммуникации</p>
          <h2>Официальные каналы клуба, арена и коммерческие маршруты</h2>
        </div>
        <div className="contact-grid">
          <article className="glass-panel glass-panel--deep">
            <span>Официальный ресурс</span>
            <h3>{club.source_name || club.name}</h3>
            {club.source_url ? (
              <a href={club.source_url} target="_blank" rel="noreferrer" className="text-link">
                Перейти на официальный ресурс
              </a>
            ) : (
              <p>Актуальные новости клуба, матчи, медиа и сервисные разделы.</p>
            )}
          </article>
          <article className="glass-panel">
            <span>Арена</span>
            <h3>{club.stadium}</h3>
            <p>{club.address}</p>
          </article>
          <article className="glass-panel">
            <span>Каналы</span>
            <div className="channel-list">
              {channels
                .filter((channel) => channel.url)
                .map((channel) => (
                  <a key={channel.label} href={channel.url} target="_blank" rel="noreferrer" className="channel-pill">
                    {channel.label}
                  </a>
                ))}
            </div>
          </article>
          <article className="glass-panel glass-panel--soft">
            <span>Партнёрам</span>
            <h3>Hospitality и корпоративные программы</h3>
            <p>Ложи, премиальные места и сценарии приёма партнёров на домашних матчах.</p>
            {partnershipUrl ? (
              <a href={partnershipUrl} target="_blank" rel="noreferrer" className="text-link">
                Открыть раздел
              </a>
            ) : (
              <a href={`mailto:${club.email}`} className="text-link">
                Связаться с клубом
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Recent results</p>
          <h2>Последние закрытые матчи</h2>
        </div>
        <div className="results-grid">
          {recentMatches.map((match) => (
            <article key={`${match.opponent}-${match.kickoff_iso}`} className="result-card result-card--light">
              <span>{match.competition}</span>
              <h3>{match.opponent}</h3>
              <strong className="scoreline scoreline--small">{match.result_label}</strong>
              <p>{match.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
