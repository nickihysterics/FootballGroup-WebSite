export default function MediaPage({ data }) {
  const { lead_story: leadStory, news_items: newsItems, gallery_items: galleryItems } = data;
  const sideStories = newsItems.slice(1, 3);

  return (
    <>
      <section className="page-banner page-banner--media">
        <div className="page-banner__copy card">
          <p className="eyebrow">Медиа</p>
          <h1>Медиа команды: истории сезона, фотографии и официальные публикации</h1>
          <p>Первая история, плотная новостная сетка и отдельный фотослой собирают единый медийный контур клуба.</p>
        </div>
        <div className="media-stage">
          {leadStory ? (
            <article className="media-lead">
              {leadStory.cover_url ? <img src={leadStory.cover_url} alt={leadStory.title} /> : null}
              <div className="media-lead__overlay">
                <span>{leadStory.published_label}</span>
                <h2>{leadStory.title}</h2>
                <p>{leadStory.excerpt}</p>
              </div>
            </article>
          ) : null}
          <div className="media-stage__side">
            {sideStories.map((story) => (
              <article key={story.id} className="media-stage__card">
                {story.cover_url ? <img src={story.cover_url} alt={story.title} /> : null}
                <div className="media-stage__overlay">
                  <span>{story.published_label}</span>
                  <h3>{story.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block editorial-board">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Новости</p>
          <h2>Редакционная лента клуба: сильные обложки, чистый текст и понятная иерархия</h2>
        </div>
        <div className="news-grid">
          {newsItems.map((story) => (
            <article key={story.id} className="news-card">
              {story.cover_url ? <img src={story.cover_url} alt={story.title} /> : null}
              <div className="news-card__body">
                <span>{story.published_label}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                {story.source_url ? (
                  <a href={story.source_url} target="_blank" rel="noreferrer" className="text-link">
                    {story.source_name || "Открыть источник"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-block--wide gallery-field">
        <div className="section-heading section-heading--wide">
          <p className="eyebrow">Галерея</p>
          <h2>Фотоистории матчдэй и атмосфера арены</h2>
        </div>
        <div className="gallery-mosaic">
          {galleryItems.map((item) => (
            <article key={item.id} className="gallery-mosaic__card">
              {item.image_url ? <img src={item.image_url} alt={item.title} /> : null}
              <div className="gallery-mosaic__overlay">
                <span>{item.accent || item.category_label}</span>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
