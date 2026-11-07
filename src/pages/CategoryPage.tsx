import { newsList } from '../data/news'
import type { Article } from '../types/news'

type Props = {
    category: string
    onOpen?: (id: number) => void
}
function CategoryPage({ category, onOpen }: Props) {
    const list: Article[] = []
    for (const item of newsList) {
        if (item.category === category) {
            list.push(item)
        }
    }
    list.sort((a, b) => (a.date < b.date ? 1 : -1))
    return (
        <div>
            <h2>{category}</h2>
            {list.length === 0 && <p>Chưa có bài viết nào trong mục này</p>}
            {list.map((item) => (
                <div key={item.id}>
                    <h3 onClick={() => onOpen && onOpen(item.id)}>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    )
}
export default CategoryPage