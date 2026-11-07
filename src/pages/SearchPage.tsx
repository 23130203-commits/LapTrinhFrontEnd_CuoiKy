import { newsList } from '../data/news'
import type { Article } from '../types/news'

type Props = {
    keyword: string
    onOpen?: (id: number) => void
}
function SearchPage({ keyword, onOpen }: Props) {
    const key = keyword.trim().toLowerCase()
    const result: Article[] = []
    if (key !== '') {
        for (const item of newsList) {
            if (item.title.toLowerCase().includes(key) || item.summary.toLowerCase().includes(key)) {
                result.push(item)
            }
        }
    }
    return (
        <div>
            <h2>Kết quả tìm kiếm cho "{keyword}"</h2>
            <p>Tìm thấy {result.length} bài viết</p>
            {result.map((item) => (
                <div key={item.id}>
                    <h3 onClick={() => onOpen && onOpen(item.id)}>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    )
}
export default SearchPage