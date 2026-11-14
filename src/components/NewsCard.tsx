import type { Article } from '../types/news'
import { useState } from 'react'
import { formatDate } from '../utils/date'

type ArticleWithImage = Article & { imageUrl?: string }

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
    const [imageFailed, setImageFailed] = useState(false)
    const imageUrl = (article as ArticleWithImage).imageUrl
    const showImage = Boolean(imageUrl) && !imageFailed

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
                {showImage && (
                    <img
                        className="news-card-img"
                        src={imageUrl}
                        alt={article.title}
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                )}
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
                        {article.summary || 'Chưa có mô tả cho bài viết này.'}
                    </p>
                )}

                <div className="news-meta">
                    <span>{article.author}</span>

                    <span>
                        {formatDate(article.date)}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default NewsCard