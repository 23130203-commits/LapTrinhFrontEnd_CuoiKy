import type { Article } from '../types/news'

export interface numberView {
    article: Article
    views: number
}
const storage_Key = 'numberView'
export function getNumberView(): numberView[] {
    try {
        const data = localStorage.getItem(storage_Key)
        const list = data ? JSON.parse(data) : []
        return Array.isArray(list) ? list.sort((a: numberView, b: numberView) => b.views - a.views) : []
    } catch {
        return []
    }
}
export function increaseView(article: Article){
    const list = getNumberView()
    const item = list.find(item => item.article.id === article.id)
    if (item) {
        item.views += 1
    } else {
        list.push({article: article, views: 1})
    }
    localStorage.setItem(storage_Key, JSON.stringify(list))
}