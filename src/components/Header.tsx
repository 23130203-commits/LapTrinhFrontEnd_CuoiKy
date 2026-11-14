import {useState} from "react"
import './css/header.css'
import logo from '../assets/VNN.png'
import CategoryMenu from './CategoryMenu'
import type {FormEvent, MouseEvent} from "react"

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

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-container header-top-content">
                    <span>{today}</span>
                    <div className="header-top-links">
                        <a href="#" onClick={(e) => {
                            e.preventDefault()
                            setDemoMessenge('"Tin mới đọc" hiện chưa có trong demo')
                        }}>Tin mới đọc</a>
                        <a href="#" onClick={(e) => {
                            e.preventDefault()
                            setDemoMessenge('"Đọc nhiều" hiện chưa có trong demo')
                        }}>Đọc nhiều</a>
                        <a href="#" onClick={(e) => {
                            e.preventDefault()
                            setDemoMessenge('"Liên hệ" hiện chưa được hỗ trợ trong demo')
                        }}>Liên hệ</a>
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
        </header>
    )
}
export default Header