import {useState} from "react"
import './css/header.css'
import logo from '../assets/VNN.png'
import CategoryMenu from './CategoryMenu'
import type {FormEvent, MouseEvent} from "react"
import {getReadHistory, readTime} from '../utils/readHistory.ts'
import type { readHistory } from '../utils/readHistory'
import {getNumberView, type numberView} from "../utils/numberView.ts";

interface HeaderProps {
    activeCategory?: string
    goHome?: () => void
    selectCategory?: (category: string) => void
    search?: (keyword: string) => void
}

function Header({ activeCategory, goHome, selectCategory, search }: HeaderProps) {
    const [keyword, setKeyword] = useState('')
    const [demoMessenge, setDemoMessenge] = useState('')
    const today = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
    })
    const handleGohome = (e: MouseEvent<HTMLAnchorElement>) => { //Logo hoặc trang chủ
        e.preventDefault()
        if (goHome) goHome()
    }
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {  //tìm kiếm
        e.preventDefault()
        if (keyword.trim() === '') return
        if (search) search(keyword.trim())
    }
    const [showHistory, setShowHistory] = useState(false)
    const [readHistory, setReadHistory] = useState<readHistory[]>([])
    const handleReadHistory = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setDemoMessenge('')
        setShowNumberView(false)
        setReadHistory(getReadHistory())
        setShowHistory(prev => !prev)
    }
    const [showNumberView, setShowNumberView] = useState(false)
    const [numberView, setNumberView] = useState<numberView[]>([])
    const handleNumberView = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setDemoMessenge('')
        setReadHistory(getReadHistory())
        setShowHistory(false)
        setNumberView(getNumberView())
        setShowNumberView(prev => !prev)
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-container header-top-content">
                    <span>{today}</span>
                    <div className="header-top-links">
                        <a href="#" onClick={handleReadHistory} aria-expanded={showHistory}>Tin mới đọc</a>
                        <a href="#" onClick={handleNumberView} aria-expanded={showNumberView}>Đọc nhiều</a>
                    </div>
                </div>
            </div>
            <div className="header-container header-main">
                <a href="#" className="header-logo" onClick={handleGohome} aria-label="Về trang chủ">
                    <img src={logo} alt="VietNamNet" />
                </a>
                <form className="header-search" onSubmit={handleSearch}>
                    <input type="search" placeholder="Tìm kiếm tin tức..." value={keyword}
                           onChange={(e) => setKeyword(e.target.value)} aria-label="Từ khóa tìm kiếm" />
                    <button type="submit">Tìm</button>
                </form>
                <button type="button" className="header-login">Đăng nhập</button>
            </div>
            <CategoryMenu activeCategory={activeCategory} goHome={goHome} selectCategory={selectCategory} />

            {demoMessenge && (
                <div className="demo-messenge" role="status">
                    <span>{demoMessenge}</span>
                    <button type="button" onClick={() => setDemoMessenge('')}>X</button>
                </div>
            )}

            {showHistory && (
                <div className="read-history">
                    <div className="history-header">
                        <h3>Tin mới đọc</h3>
                        <button onClick={() => setShowHistory(false)}>X</button>
                    </div>

                    {readHistory.length === 0 ? (
                        <p>Bạn chưa đọc bài báo nào.</p>
                    ) : (
                        <ul className="history-list">
                            {readHistory.map(item => (
                                <li key={item.article.id}>
                                    <span>{item.article.title}</span>
                                    <time dateTime={new Date(item.readAt).toISOString()}>{readTime(item.readAt)}</time>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {showNumberView && (
                <div className="read-history">
                    <div className="history-header">
                        <h3>Đọc nhiều</h3>
                        <button onClick={() => setShowNumberView(false)}>X</button>
                    </div>

                    {numberView.length === 0 ? (
                        <p>Chưa có bài báo nào được đọc</p>
                    ) : (
                        <ul className="history-list">
                            {numberView.map((item) => (
                                <li key={item.article.id}>
                                    <span className="view-title">{item.article.title}</span>
                                    <span className="view-count">{item.views} Lượt đọc </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </header>
    )
}
export default Header