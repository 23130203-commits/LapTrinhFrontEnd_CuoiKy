import {useState} from "react"
import './css/header.css'
import * as React from "react";

interface HeaderProps {
    activeCategory?: string
    goHome?: () => void
    selectCategory?: (category: string) => void
    search?: (keyword: string) => void
}

const categories = ['Thời sự', 'Kinh doanh', 'Thế giới', 'Giáo dục', 'Công nghệ', 'Sức khỏe', 'Thể thao', 'Giải trí', 'Pháp luật']

function Header({ activeCategory, goHome, selectCategory, search }: HeaderProps) {
    const [keyword, setKeyword] = useState('')
    const today = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
    const handleGohome = (e: React.MouseEvent) => { //Logo hoặc trang chủ
        e.preventDefault()
        if (goHome) goHome()
    }
    const handleSelectCategory = (e: React.MouseEvent, category: string) => {   //Menu
        e.preventDefault()
        if (selectCategory) selectCategory(category)
    }
    const handleSearch = (e: React.FormEvent) => {  //tìm kiếm
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
                        <a href="#">Tin mới đọc</a>
                        <a href="#">Đọc nhiều</a>
                        <a href="#">Liên hệ</a>
                    </div>
                </div>
            </div>

            <div className="header-container header-main">
                <a href="#" className="header-logo" onClick={handleGohome}>
                    <span className="logo-blue">VietNam</span>
                    <span className="logo-red">Net</span>
                </a>

                <form className="header-search" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search..." value={keyword}
                           onChange={(e) => setKeyword(e.target.value)}/>
                    <button type="submit">Tìm</button>
                </form>

                <button className="header-login">Đăng nhập</button>
            </div>

            <nav className="header-nav">
                <ul className="header-container header-nav-list">
                    <li><a href="#" className={!activeCategory ? 'active' : ''} onClick={handleGohome}>Trang chủ</a>
                    </li>
                    {categories.map((category) => (
                        <li key={category}><a href="#" className={activeCategory === category ? 'active' : ''}
                                              onClick={(e) => handleSelectCategory(e, category)}>{category}
                        </a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header