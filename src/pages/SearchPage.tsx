import type { ReactNode } from 'react'
import { newsList } from '../data/news'
import type { Article } from '../types/news'
import NewsCard from '../components/NewsCard'

type Props = {
    keyword: string
    onSelect: (article: Article) => void
}

function SearchPage({ keyword, onSelect }: Props) {
    const key = keyword.trim().toLocaleLowerCase('vi')
    const result: Article[] = []
    if (key !== '') {
        for (const item of newsList) {
            const text = (item.title + ' ' + item.summary + ' ' + item.content + ' ' + item.category).toLocaleLowerCase('vi')
            if (text.includes(key)) {
                result.push(item)
            }
        }
    }

    let body: ReactNode
    if (key === '') {
        body = (
            <div className="empty-state">
                <h2>Hãy nhập từ khóa để tìm kiếm</h2>
                <p>Bạn có thể tìm theo tiêu đề, nội dung hoặc chuyên mục.</p>
            </div>
        )
    } else if (result.length === 0) {
        body = (
            <div className="empty-state">
                <h2>Không tìm thấy bài viết phù hợp</h2>
                <p>Thử một từ khóa khác nhé.</p>
            </div>
        )
    } else {
        body = (
            <section className="news-section">
                <div className="section-title-row">
                    <h2>Bài viết tìm được</h2>
                    <span>{result.length} bài viết</span>
                </div>
                <div className="news-grid">
                    {result.map((item) => (
                        <NewsCard key={item.id} article={item} onSelect={onSelect} />
                    ))}
                </div>
            </section>
        )
    }
    return (
        <div className="home-page">
            <div className="page-heading">
                <div>
                    <span className="eyebrow">TÌM KIẾM</span>
                    <h1>Kết quả tìm kiếm</h1>
                </div>
                {key !== '' && <span className="updated-label">Từ khóa: {keyword.trim()}</span>}
            </div>
            {body}
        </div>
    )
}
export default SearchPage