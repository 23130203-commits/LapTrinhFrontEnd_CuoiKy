import type { Article } from '../types/news'

type NewsCardProps = {
    article: Article
    onSelect: (article: Article) => void
    variant?: 'default' | 'compact'
}

function NewsCard({
                      article,
                      onSelect,
                      variant = 'default'
                  }: NewsCardProps) {
    return (
        <article
            className={`news-card ${
                variant === 'compact' ? 'news-card-compact' : ''
            }`}
        >
            <button
                className="news-card-image"
                type="button"
                onClick={() => onSelect(article)}
                aria-label={`Đọc bài ${article.title}`}
            >
                <span className="image-label">
                    {article.category}
                </span>
            </button>

            <div className="news-card-body">
                <span className="news-category">
                    {article.category}
                </span>

                <button
                    className="news-card-title"
                    type="button"
                    onClick={() => onSelect(article)}
                >
                    {article.title}
                </button>

                {variant !== 'compact' && (
                    <p className="news-card-summary">
                        {article.summary}
                    </p>
                )}

                <div className="news-meta">
                    <span>{article.author}</span>

                    <span>
                        {new Date(article.date).toLocaleDateString('vi-VN')}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default NewsCard