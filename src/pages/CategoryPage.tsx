import { newsList } from '../data/news'
import type { Article } from '../types/news'
import NewsCard from '../components/NewsCard'
import { getTime } from '../utils/date'

type Props = {
    category: string
    articles?: Article[]
    onOpen: (id: number) => void
}

function CategoryPage({ category, articles = newsList, onOpen }: Props) {
    const list: Article[] = []
    for (const item of articles) {
        if (item.category === category) {
            list.push(item)
        }
    }
    list.sort((a, b) => getTime(b.date) - getTime(a.date))

    const openCard = (article: Article) => onOpen(article.id)

    return (
        <div className="home-page">
            <div className="page-heading">
                <div>
                    <span className="eyebrow">CHUYÊN MỤC</span>
                    <h1>{category}</h1>
                </div>
                <span className="updated-label">Cập nhật liên tục</span>
            </div>

            {list.length === 0 ? (
                <div className="empty-state">
                    <h2>Chưa có bài viết nào trong mục này</h2>
                    <p>Bạn thử chọn chuyên mục khác nhé.</p>
                </div>
            ) : (
                <section className="news-section">
                    <div className="section-title-row">
                        <h2>Tin {category}</h2>
                        <span>{list.length} bài viết</span>
                    </div>
                    <div className="news-grid">
                        {list.map((item) => (
                            <NewsCard key={item.id} article={item} onSelect={openCard} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
export default CategoryPage