import CountdownChip from "../../components/countdown-chip";

export default function MatchesPage({ data }) {
  const { featured_match, matches, match_hub } = data;

  return (
    <>
      <section className="page-banner page-banner--dark">
        <div className="page-banner__copy card card--dark">
          <p className="eyebrow">Матч-центр</p>
          <h1>Календарь сезона, ближайшие игры и результаты команды</h1>
          <p>В одном ритме собраны афиша матчей, статусы, счёт, арена и официальный протокол каждой встречи.</p>
        </div>
        {featured_match ? (
          <article className="feature-match-card feature-match-card--hero">
            <div className="feature-match-card__top">
              <span className="badge-chip badge-chip--bright">Главный матч</span>
              <CountdownChip kickoffIso={featured_match.kickoff_iso} />
            </div>
            <h2>{featured_match.opponent}</h2>
            <p>{featured_match.competition}</p>
            <strong>
              {featured_match.date_label} · {featured_match.time_label}
            </strong>
            <span>{featured_match.venue}</span>
          </article>
        ) : null}
      </section>

      <section className="section-block section-block--dark match-ribbon">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Ближайшие матчи</p>
          <h2>Ближайшие игры и последние результаты на одной ленте</h2>
        </div>
        <div className="ticker-row">
          {match_hub.upcoming.map((item) => (
            <div key={`${item.opponent}-${item.kickoff_iso}`} className="ticker-pill">
              <strong>{item.opponent}</strong>
              <span>
                {item.date_label} · {item.time_label}
              </span>
            </div>
          ))}
          {match_hub.recent.map((item) => (
            <div key={`${item.opponent}-${item.result_label}`} className="ticker-pill ticker-pill--muted">
              <strong>{item.opponent}</strong>
              <span>{item.result_label}</span>
            </div>
          ))}
        </div>
        <p className="match-ribbon__stamp">
          {match_hub.updated_label ? `Последнее обновление ${match_hub.updated_label} МСК` : "Матч-центр в актуальном состоянии"}
        </p>
      </section>

      <section className="section-block schedule-board">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Календарь сезона</p>
          <h2>Полный календарь сезона: от афиши до финального счёта</h2>
        </div>
        <div className="schedule-grid">
          {matches.map((match) => (
            <article key={`${match.opponent}-${match.kickoff_iso}-${match.status}`} className="schedule-card">
              <div className="schedule-card__date">
                <span>{match.short_date_label}</span>
                <strong>{match.time_label}</strong>
              </div>
              <div className="schedule-card__body">
                <div className="schedule-card__head">
                  <h3>{match.opponent}</h3>
                  <span className="pill-label">{match.status_label}</span>
                </div>
                <p>{match.competition}</p>
                <strong className="scoreline scoreline--small">{match.result_label}</strong>
                <span>{match.city ? `${match.city} · ` : ""}{match.venue}</span>
                {match.summary ? <p className="schedule-card__summary">{match.summary}</p> : null}
                {match.source_url ? (
                  <a href={match.source_url} target="_blank" rel="noreferrer" className="text-link">
                    Официальный источник
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
