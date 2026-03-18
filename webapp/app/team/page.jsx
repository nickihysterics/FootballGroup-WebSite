import { getTeamData } from "../../lib/api";

export const metadata = {
  title: "Команда | Газпром Футбол",
};

export default async function TeamPage() {
  const { captain, groups } = await getTeamData();
  const overview = groups.filter((group) => group.players.length);

  return (
    <>
      <section className="page-banner">
        <div className="page-banner__copy card">
          <p className="eyebrow">Первая команда</p>
          <h1>Первая команда Газпрома: состав сезона и ключевые фигуры</h1>
          <p>Крупные портреты, статистика по матчам и короткие игровые профили для каждого футболиста.</p>
          <div className="page-banner__kickers">
            {overview.map((group) => (
              <article key={group.key} className="kicker-stat">
                <span>{group.label}</span>
                <strong>{group.players.length}</strong>
              </article>
            ))}
          </div>
        </div>
        {captain ? (
          <article className="captain-hero">
            <div className="captain-hero__visual">
              {captain.photo_url ? <img src={captain.photo_url} alt={captain.full_name} /> : <span>{captain.initials}</span>}
            </div>
            <div className="captain-hero__content">
              <span className="badge-chip badge-chip--bright">Капитан</span>
              <h2>
                {captain.full_name} <small>#{captain.number}</small>
              </h2>
              <p>{captain.bio}</p>
              <dl className="captain-hero__stats">
                <div>
                  <dt>Позиция</dt>
                  <dd>{captain.position_label}</dd>
                </div>
                <div>
                  <dt>Гражданство</dt>
                  <dd>{captain.citizenship || "—"}</dd>
                </div>
                <div>
                  <dt>Матчи</dt>
                  <dd>{captain.matches_for_club}</dd>
                </div>
                <div>
                  <dt>Минуты</dt>
                  <dd>{captain.minutes_for_club}</dd>
                </div>
              </dl>
            </div>
          </article>
        ) : null}
      </section>

      {groups
        .filter((group) => group.players.length)
        .map((group) => (
          <section key={group.key} className="section-block roster-section">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">{group.label}</p>
              <h2>
                {group.label} · {group.players.length} игроков
              </h2>
            </div>
            <div className="roster-grid">
              {group.players.map((player) => (
                <article key={player.id} className="roster-card">
                  <div className="roster-card__media">
                    {player.photo_url ? <img src={player.photo_url} alt={player.full_name} /> : <span>{player.initials}</span>}
                  </div>
                  <div className="roster-card__meta">
                    <span className="badge-chip">#{player.number}</span>
                    <span className="pill-label">{player.position_label}</span>
                  </div>
                  <h3>{player.full_name}</h3>
                  <p>{player.bio || player.compact_profile || "Игровой профиль футболиста первой команды."}</p>
                  <div className="roster-card__facts">
                    <span>{player.birth_date_label || "Дата рождения не указана"}</span>
                    <span>{player.place_of_birth || player.citizenship || "Клубная база"}</span>
                    <span>{player.previous_club ? `Предыдущий клуб: ${player.previous_club}` : "Основной состав"}</span>
                  </div>
                  <div className="skill-grid">
                    <div>
                      <span>Скорость</span>
                      <strong>{player.speed}</strong>
                    </div>
                    <div>
                      <span>Выносливость</span>
                      <strong>{player.stamina}</strong>
                    </div>
                    <div>
                      <span>Техника</span>
                      <strong>{player.technique}</strong>
                    </div>
                  </div>
                  <div className="roster-card__stats">
                    <div>
                      <span>Рост</span>
                      <strong>{player.height_cm ? `${player.height_cm} см` : "—"}</strong>
                    </div>
                    <div>
                      <span>Вес</span>
                      <strong>{player.weight_kg ? `${player.weight_kg} кг` : "—"}</strong>
                    </div>
                    <div>
                      <span>Матчи</span>
                      <strong>{player.matches_for_club}</strong>
                    </div>
                    <div>
                      <span>Голы</span>
                      <strong>{player.goals_for_club}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
    </>
  );
}
