import usePageData from "@/features/page-data/usePageData.js";
import Reveal from "@/shared/ui/Reveal/Reveal.jsx";

export default function MediaPage() {
  const { data } = usePageData();

  const leadStory = data?.lead_story ?? null;
  const newsItems = Array.isArray(data?.news_items) ? data.news_items : [];
  const galleryItems = Array.isArray(data?.gallery_items)
    ? data.gallery_items
    : [];
  const sideStories = newsItems.slice(1, 3);

  return (
    <>
      <Reveal y={22} duration={0.5}>
        <section className="page-banner page-banner--media">
          <div className="page-banner__copy card">
            <p className="eyebrow">Медиа</p>
            <h1>
              Медиа команды: истории сезона, фотографии и официальные публикации
            </h1>
            <p>
              Первая история, плотная новостная сетка и отдельный фотослой
              собирают единый медийный контур клуба.
            </p>
          </div>

          <div className="media-stage">
            {leadStory ? (
              <article className="media-lead">
                {leadStory.cover_url ? (
                  <img src={leadStory.cover_url} alt={leadStory.title} />
                ) : null}
                <div className="media-lead__overlay">
                  <span>{leadStory.published_label}</span>
                  <h2>{leadStory.title}</h2>
                  <p>{leadStory.excerpt}</p>
                </div>
              </article>
            ) : (
              <article className="media-lead card">
                <div className="section-heading">
                  <p className="eyebrow">Медиа</p>
                  <h2>Главная история пока недоступна</h2>
                  <p>
                    Контент этого блока появится, когда API вернёт lead_story.
                  </p>
                </div>
              </article>
            )}

            <div className="media-stage__side">
              {sideStories.length ? (
                sideStories.map((story) => (
                  <article key={story.id} className="media-stage__card">
                    {story.cover_url ? (
                      <img src={story.cover_url} alt={story.title} />
                    ) : null}
                    <div className="media-stage__overlay">
                      <span>{story.published_label}</span>
                      <h3>{story.title}</h3>
                    </div>
                  </article>
                ))
              ) : (
                <>
                  <article className="media-stage__card card">
                    <div className="section-heading">
                      <p className="eyebrow">Новости</p>
                      <h2>Пока нет второй истории</h2>
                    </div>
                  </article>
                  <article className="media-stage__card card">
                    <div className="section-heading">
                      <p className="eyebrow">Новости</p>
                      <h2>Пока нет третьей истории</h2>
                    </div>
                  </article>
                </>
              )}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal y={24} duration={0.55}>
        <section className="section-block editorial-board">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">Новости</p>
            <h2>
              Редакционная лента клуба: сильные обложки, чистый текст и
              понятная иерархия
            </h2>
          </div>

          <div className="news-grid">
            {newsItems.length ? (
              newsItems.map((story) => (
                <article key={story.id} className="news-card">
                  {story.cover_url ? (
                    <img src={story.cover_url} alt={story.title} />
                  ) : null}
                  <div className="news-card__body">
                    <span>{story.published_label}</span>
                    <h3>{story.title}</h3>
                    <p>{story.excerpt}</p>
                    {story.source_url ? (
                      <a
                        href={story.source_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        {story.source_name || "Открыть источник"}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))
            ) : (
              <article className="news-card card">
                <div className="news-card__body">
                  <span>Новости</span>
                  <h3>Новостей пока нет</h3>
                  <p>API ещё не вернул news_items для этой страницы.</p>
                </div>
              </article>
            )}
          </div>
        </section>
      </Reveal>

      <Reveal y={24} duration={0.55}>
        <section className="section-block section-block--wide gallery-field">
          <div className="section-heading section-heading--wide">
            <p className="eyebrow">Галерея</p>
            <h2>Фотоистории матчдэй и атмосфера арены</h2>
          </div>

          <div className="gallery-mosaic">
            {galleryItems.length ? (
              galleryItems.map((item) => (
                <article key={item.id} className="gallery-mosaic__card">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} />
                  ) : null}
                  <div className="gallery-mosaic__overlay">
                    <span>{item.accent || item.category_label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </article>
              ))
            ) : (
              <article className="gallery-mosaic__card card">
                <div className="section-heading">
                  <p className="eyebrow">Галерея</p>
                  <h2>Галерея пока пуста</h2>
                  <p>API ещё не вернул gallery_items.</p>
                </div>
              </article>
            )}
          </div>
        </section>
      </Reveal>
    </>
  );
}