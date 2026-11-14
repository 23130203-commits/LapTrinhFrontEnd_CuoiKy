 export function getTime(date: string): number {
    const time = new Date(date).getTime()
    return Number.isNaN(time) ? 0 : time
}
 export function formatDate(date: string): string {
    const d = new Date(date)
    return Number.isNaN(d.getTime()) ? 'Chưa rõ ngày' : d.toLocaleDateString('vi-VN')
}