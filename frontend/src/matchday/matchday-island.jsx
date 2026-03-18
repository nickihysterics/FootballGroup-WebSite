import React, { useEffect, useState } from "react";

function formatCountdown(kickoffIso) {
    if (!kickoffIso) {
        return "";
    }

    const kickoff = new Date(kickoffIso);
    if (Number.isNaN(kickoff.getTime())) {
        return "";
    }

    const diff = kickoff.getTime() - Date.now();
    if (diff <= 0) {
        return "Матч-дэй уже начался";
    }

    const totalMinutes = Math.floor(diff / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    if (days > 0) {
        return `До стартового свистка: ${days} д ${hours} ч`;
    }

    return `До стартового свистка: ${hours} ч ${String(minutes).padStart(2, "0")} мин`;
}

function useCountdown(kickoffIso) {
    const [label, setLabel] = useState(() => formatCountdown(kickoffIso));

    useEffect(() => {
        if (!kickoffIso) {
            setLabel("");
            return undefined;
        }

        const sync = () => {
            setLabel(formatCountdown(kickoffIso));
        };

        sync();
        const intervalId = window.setInterval(sync, 30000);
        return () => window.clearInterval(intervalId);
    }, [kickoffIso]);

    return label;
}

function MatchdayResult({ clubShortName, latestResult }) {
    const hasScore = latestResult && latestResult.score_for !== null && latestResult.score_against !== null;

    return (
        <article className="matchday-result-panel">
            <div className="matchday-result-panel__head">
                <span className="matchday-result-panel__eyebrow">Последний результат</span>
                {latestResult?.source_url ? (
                    <a href={latestResult.source_url} target="_blank" rel="noreferrer" className="text-link">
                        Протокол матча
                    </a>
                ) : null}
            </div>
            {latestResult ? (
                <>
                    {hasScore ? (
                        <div className="matchday-result-panel__score">
                            <strong>{latestResult.score_for}</strong>
                            <span>:</span>
                            <strong>{latestResult.score_against}</strong>
                        </div>
                    ) : (
                        <div className="matchday-result-panel__status">Счёт уточняется</div>
                    )}
                    <h3>
                        {clubShortName} vs {latestResult.opponent}
                    </h3>
                    <p>
                        {latestResult.competition} · {latestResult.date_label}
                    </p>
                    {latestResult.summary ? <p className="matchday-result-panel__summary">{latestResult.summary}</p> : null}
                </>
            ) : (
                <>
                    <div className="matchday-result-panel__status">Нет завершённых матчей</div>
                    <h3>Результаты будут доступны после ближайшей игры</h3>
                    <p>Модуль результата нужен, чтобы блок держал спортивный ритм, а не превращался в промо-баннер без футбола.</p>
                </>
            )}
        </article>
    );
}

function MatchdaySales({ links }) {
    const items = [
        {
            key: "membership_url",
            href: links.membership_url,
            className: "matchday-sales-card matchday-sales-card--soft",
            label: "Абонементы",
            title: "Сезонный доступ на домашние матчи",
            body: "Лучший сценарий для возвратной аудитории и повторных посещений.",
        },
        {
            key: "shop_url",
            href: links.shop_url,
            className: "matchday-sales-card",
            label: "Магазин",
            title: "Форма, капсулы и клубный мерч",
            body: "Коммерческий маршрут должен жить рядом с главным матчевым оффером.",
        },
        {
            key: "hospitality_url",
            href: links.hospitality_url,
            className: "matchday-sales-card matchday-sales-card--dark",
            label: "Hospitality",
            title: "Премиальный день матча",
            body: "Отдельный high-value вход для корпоративных гостей и business club.",
        },
    ].filter((item) => item.href);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="matchday-sales-rail">
            {items.map((item) => (
                <a key={item.key} href={item.href} target="_blank" rel="noreferrer" className={item.className}>
                    <span>{item.label}</span>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                </a>
            ))}
        </div>
    );
}

export function MatchdayIsland({ data }) {
    const countdown = useCountdown(data.featured_match?.kickoff_iso);

    return (
        <div className="matchday-deck">
            <div className="matchday-shell">
                <div className="matchday-shell__top">
                    <article className="matchday-headliner">
                        <div className="matchday-headliner__topline">
                            <p className="eyebrow">Главный матч недели</p>
                            <span className="matchday-headliner__competition">
                                {data.featured_match?.competition || "Matchday center"}
                            </span>
                        </div>
                        {data.featured_match ? (
                            <>
                                <div className="matchday-headliner__versus">
                                    <div className="matchday-club">
                                        <span>Домашняя команда</span>
                                        <strong>{data.club.short_name}</strong>
                                    </div>
                                    <div className="matchday-club__separator">vs</div>
                                    <div className="matchday-club matchday-club--away">
                                        <span>Соперник</span>
                                        <strong>{data.featured_match.opponent}</strong>
                                    </div>
                                </div>
                                <div className="matchday-headliner__facts">
                                    <div>
                                        <span>Дата</span>
                                        <strong>{data.featured_match.date_label}</strong>
                                    </div>
                                    <div>
                                        <span>Начало</span>
                                        <strong>{data.featured_match.time_label}</strong>
                                    </div>
                                    <div>
                                        <span>Город</span>
                                        <strong>{data.featured_match.city || data.club.city}</strong>
                                    </div>
                                    <div>
                                        <span>Арена</span>
                                        <strong>{data.featured_match.venue}</strong>
                                    </div>
                                </div>
                                <p className="matchday-headliner__note">
                                    Ключевой матч вынесен как спортивная афиша: дата, время, город и покупка не конкурируют друг с другом, а собираются в одну геометрию.
                                </p>
                                <div className="matchday-headliner__footer">
                                    <div className="matchday-headliner__countdown">{countdown}</div>
                                    <div className="matchday-headliner__actions">
                                        {data.links.ticket_url ? (
                                            <a href={data.links.ticket_url} target="_blank" rel="noreferrer" className="button">
                                                Билеты на матч
                                            </a>
                                        ) : null}
                                        <a href={data.links.matches_url} className="text-link">
                                            Весь календарь сезона
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="matchday-headliner__versus">
                                    <div className="matchday-club">
                                        <span>Matchday</span>
                                        <strong>Следующий матч появится здесь</strong>
                                    </div>
                                </div>
                                <p className="matchday-headliner__note">
                                    Пока игра не назначена, секция остаётся главным входом в календарь, результаты и ключевые коммерческие предложения клуба.
                                </p>
                                <div className="matchday-headliner__footer">
                                    <div className="matchday-headliner__actions">
                                        <a href={data.links.matches_url} className="button">
                                            Открыть матч-центр
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </article>
                    <MatchdayResult clubShortName={data.club.short_name} latestResult={data.latest_result} />
                </div>
                <MatchdaySales links={data.links} />
            </div>
            <div className="matchday-ticker">
                <div className="matchday-ticker__track">
                    <span>Следующий матч</span>
                    {data.featured_match?.opponent ? <span>{data.featured_match.opponent}</span> : null}
                    {data.latest_result?.score_for !== null && data.latest_result?.score_against !== null ? (
                        <span>
                            Последний счёт {data.latest_result.score_for}:{data.latest_result.score_against}
                        </span>
                    ) : null}
                    <span>{data.club.stadium}</span>
                    {data.links.ticket_url ? <span>Билеты</span> : null}
                    {data.links.membership_url ? <span>Абонементы</span> : null}
                    {data.links.shop_url ? <span>Магазин</span> : null}
                </div>
            </div>
        </div>
    );
}
