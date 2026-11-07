import { newsList } from '../data/news'
import type { Article } from '../types/news'

type Props = {
    id: number
}
function ArticlePage({ id }: Props) {
    let article: Article | null = null
    for (const item of newsList) {
        if (item.id === id) {
            article = item
        }
    }
    if (article === null) {
        return <p>Không tìm thấy bài viết</p>
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <p>
                {article.author} - {article.date}
            </p>
            <p>{article.summary}</p>
            <p>{article.content}</p>
        </div>
    )
}
export default ArticlePage