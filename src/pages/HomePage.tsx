import { useMemo, useState } from 'react'
import type { Article } from '../types/news'
import { newsList } from '../data/news'
import NewsCard from '../components/NewsCard'

type HomePageProps = {
    activeCategory?: string
    keyword?: string
}

function HomePage({ activeCategory, keyword = '' }: HomePageProps) {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

    const filteredNews = useMemo(() => {
        const normalizedKeyword = keyword.trim().toLocaleLowerCase('vi')

        return newsList.filter((article) => {
            const matchesCategory =
                !activeCategory || article.category === activeCategory

            const searchableText =
                `${article.title} ${article.summary} ${article.content} ${article.category}`
                    .toLocaleLowerCase('vi')

            return (
                matchesCategory &&
                (!normalizedKeyword || searchableText.includes(normalizedKeyword))
            )
        })
    }, [activeCategory, keyword])

    const featuredArticle = filteredNews[0]
    const otherArticles = filteredNews.slice(1)

    if (selectedArticle) {
        return (
            <article className="article-detail">
                <button
                    className="back-link"
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                >
                    ← Quay lại trang chủ
                </button>

                <span className="news-category">
                    {selectedArticle.category}
                </span>

                <h1>{selectedArticle.title}</h1>

                <p className="article-summary">
                    {selectedArticle.summary}
                </p>

                <div className="news-meta article-byline">
                    <span>{selectedArticle.author}</span>
                    <span>
                        {new Date(selectedArticle.date).toLocaleDateString('vi-VN')}
                    </span>
                </div>

                <div className="article-cover" />

                <p className="article-content">
                    {selectedArticle.content}
                </p>

                <p className="article-note">
                    Nội dung minh họa phục vụ bài tập xây dựng giao diện đọc báo.
                </p>
            </article>
        )
    }

    return (
        <div className="home-page">
            <div className="page-heading">
                <div>
                    <span className="eyebrow">TIN TỨC MỖI NGÀY</span>

                    <h1>
                        {activeCategory ||
                            (keyword ? 'Kết quả tìm kiếm' : 'Tin tức nổi bật')}
                    </h1>
                </div>

                <span className="updated-label">
                    Cập nhật liên tục
                </span>
            </div>

            {filteredNews.length === 0 ? (
                <div className="empty-state">
                    <h2>Chưa tìm thấy bài viết phù hợp</h2>
                    <p>
                        Thử một từ khóa khác hoặc chọn chuyên mục khác nhé.
                    </p>
                </div>
            ) : (
                <>
                    {!keyword && !activeCategory && featuredArticle && (
                        <section className="top-news" aria-label="Tin nổi bật">
                            <button
                                className="featured-visual"
                                type="button"
                                onClick={() => setSelectedArticle(featuredArticle)}
                            >
                                <span className="featured-tag">
                                    TIN NỔI BẬT
                                </span>

                                <span className="featured-caption">
                                    {featuredArticle.category}
                                </span>
                            </button>

                            <div className="featured-copy">
                                <span className="news-category">
                                    {featuredArticle.category}
                                </span>

                                <button
                                    className="featured-title"
                                    type="button"
                                    onClick={() => setSelectedArticle(featuredArticle)}
                                >
                                    {featuredArticle.title}
                                </button>

                                <p>{featuredArticle.summary}</p>

                                <div className="news-meta">
                                    <span>{featuredArticle.author}</span>
                                    <span>
                                        {new Date(featuredArticle.date).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>

                                <button
                                    className="read-more"
                                    type="button"
                                    onClick={() => setSelectedArticle(featuredArticle)}
                                >
                                    Đọc bài viết <span>→</span>
                                </button>
                            </div>
                        </section>
                    )}

                    <section className="news-section">
                        <div className="section-title-row">
                            <h2>
                                {keyword
                                    ? 'Bài viết tìm được'
                                    : activeCategory
                                        ? `Tin ${activeCategory}`
                                        : 'Tin mới nhất'}
                            </h2>

                            <span>{filteredNews.length} bài viết</span>
                        </div>

                        <div className="news-grid">
                            {(activeCategory || keyword
                                    ? filteredNews
                                    : otherArticles
                            ).map((article) => (
                                <NewsCard
                                    key={article.id}
                                    article={article}
                                    onSelect={setSelectedArticle}
                                />
                            ))}
                        </div>

                        {!activeCategory && !keyword && featuredArticle && (
                            <div className="latest-featured-mobile">
                                <NewsCard
                                    article={featuredArticle}
                                    onSelect={setSelectedArticle}
                                />
                            </div>
                        )}
                    </section>
                </>
            )}
        </div>
    )
}

export default HomePage