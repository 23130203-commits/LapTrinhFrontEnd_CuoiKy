import { newsList } from '../data/news'
import type { Article } from '../types/news'
import NewsCard from '../components/NewsCard'

type Props = {
    id: number
    onBack?: () => void
    onSelect?: (article: Article) => void
}

function ArticlePage({ id, onBack, onSelect }: Props) {
    let article: Article | null = null
    for (const item of newsList) {
        if (item.id === id) {
            article = item
        }
    }

    if (article === null) {
        return (
            <div className="empty-state">
                <h2>Không tìm thấy bài viết</h2>
                {onBack && (
                    <button className="back-link" type="button" onClick={onBack}>
                        ← Quay lại
                    </button>
                )}
            </div>
        )
    }

    const related: Article[] = []
    for (const item of newsList) {
        if (item.category === article.category && item.id !== article.id && related.length < 3) {
            related.push(item)
        }
    }

    return (
        <>
            <article className="article-detail">
                {onBack && (
                    <button className="back-link" type="button" onClick={onBack}>
                        ← Quay lại
                    </button>
                )}
                <span className="news-category">{article.category}</span>
                <h1>{article.title}</h1>
                <p className="article-summary">{article.summary}</p>

                <div className="news-meta article-byline">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                </div>
                <div className="article-cover" />
                {article.content.split('\n').map((text, index) => (
                    <p className="article-content" key={index}>
                        {text}
                    </p>
                ))}
            </article>
            {onSelect && related.length > 0 && (
                <section className="news-section">
                    <div className="section-title-row">
                        <h2>Tin liên quan</h2>
                    </div>
                    <div className="news-grid">
                        {related.map((item) => (
                            <NewsCard key={item.id} article={item} onSelect={onSelect} variant="compact" />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}
export default ArticlePage