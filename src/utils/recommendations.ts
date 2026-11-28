import type { Article } from '../types/news'
import type { readHistory } from './readHistory'

export function getRecommendations(
    history: readHistory[],
    articles: Article[],
    limit = 3,
): Article[] {
    const lastRead = history[0]?.article
    if (!lastRead) return []

    return articles
        .filter((article) => article.category === lastRead.category)
        .filter((article) => !history.some((item) => item.article.id === article.id))
        .slice(0, limit)
}
