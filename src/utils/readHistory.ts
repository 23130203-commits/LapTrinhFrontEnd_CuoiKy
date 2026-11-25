import type {Article} from "../types/news.ts";

export interface readHistory {
    article: Article
    readAt: number
}
const storage_Key = 'readHistory'
export function getReadHistory(): readHistory[] {
    try {
        const data = localStorage.getItem(storage_Key)
        const history = data ? JSON.parse(data) : []
        return Array.isArray(history) ? history : []
    }   catch {
        return [];
    }
}
export function save(article: Article) {
    let history = getReadHistory()
    history = history.filter(item => item.article.id !== article.id)
    history.unshift({ article: article, readAt: Date.now()})
    localStorage.setItem(storage_Key, JSON.stringify(history))
}
export function readTime(readAt: number): string {
    const minutes = Math.floor((Date.now() - readAt) / 60000)
    if (minutes < 1) return 'Vừa xong'
    if (minutes < 60) return `${minutes} phút trước`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} giờ trước`
    const day = Math.floor(hours / 24)
    return `${day} ngày trước`
}