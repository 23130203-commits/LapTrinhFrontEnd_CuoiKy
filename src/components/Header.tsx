import {useState} from "react"
import './css/header.css'
import * as React from "react";
import logo from '../assets/VNN.png'

interface HeaderProps {
    activeCategory?: string
    goHome?: () => void
    search?: (keyword: string) => void
}

const categories = [
    {   name: 'Chính trị', link: '#',
        subCategory: [
            {name: 'Sự kiện', link: '#'},
            {name: 'Xây dựng đảng', link: '#'},
            {name: 'Đối ngoại', link: '#'},
            {name: 'Bàn luận', link: '#'},
            {name: 'Kỷ nguyên mới của dân tộc', link: '#'},
            {name: 'Quốc phòng', link: '#'},
            {name: 'Quốc hội', link: '#'}
        ]},
    {   name: 'Thời sự', link: '#',
        subCategory: [
            {name: 'Dân sinh', link: '#'},
            {name: 'Giao thông', link: '#'},
            {name: 'Tin nóng', link: '#'},
            {name: 'Đô thị', link: '#'},
            {name: 'Pháp luật', link: '#'}
        ]},
    {   name: 'Kinh doanh', link: '#',
        subCategory: [
            {name: 'Tài chính', link: '#'},
            {name: 'Đầu tư', link: '#'},
            {name: 'Thị trường', link: '#'},
            {name: 'Doanh nhân', link: '#'},
            {name: 'Tư vấn tài chính', link: '#'}
        ]},
    {   name: 'Thế giới', link: '#',
        subCategory: [
            {name: 'Thế giới đó đây', link: '#'},
            {name: 'Chân dung', link: '#'},
            {name: 'Hồ sơ', link: '#'},
            {name: 'Việt Nam và Thế giới', link: '#'},
            {name: 'Bình luận quốc tế', link: '#'}
        ]},
    {   name: 'Giáo dục', link: '#',
        subCategory: [
            {name: 'Nhà trường', link: '#'},
            {name: 'Tuyển sinh', link: '#'},
            {name: 'Du học', link: '#'},
            {name: 'Khoa học', link: '#'},
            {name: 'AI CONTES', link: '#'},
            {name: 'Điểm thi THPT', link: '#'},
            {name: 'Điểm chuẩn CĐ-ĐH', link: '#'}
        ]},
    {   name: 'Công nghệ', link: '#',
        subCategory: [
            {name: 'Thị trường', link: '#'},
            {name: 'Chuyển đổi số', link: '#'},
            {name: 'Hạ tầng số', link: '#'},
            {name: 'An ninh mạng', link: '#'},
            {name: 'Sản phẩm', link: '#'},
            {name: 'AI', link: '#'}
        ]},
    {   name: 'Thể thao', link: '#',
        subCategory: [
            {name: 'Bóng đá Việt Nam', link: '#'},
            {name: 'Bóng đá Thế Giới', link: '#'},
            {name: 'Tin chuyển nhượng', link: '#'},
            {name: 'Tường thuật trực tiếp', link: '#'},
            {name: 'Video thể thao', link: '#'},
            {name: 'Các môn khác', link: '#'}
        ]},
    {   name: 'Giải trí', link: '#',
        subCategory: [
            {name: 'Phim truyền hình', link: '#'},
            {name: 'Sách', link: '#'},
            {name: 'Mỹ thuật - Sân khấu', link: '#'},
            {name: 'Di sản', link: '#'},
            {name: 'Nhạc', link: '#'},
            {name: 'Thế giới sao', link: '#'}
        ]},
    {   name: 'Du lịch', link: '#',
        subCategory: [
            {name: 'Chuyện của ...', link: '#'},
            {name: 'Đi đây đi đó', link: '#'},
            {name: 'Ăn ăn uống uống', link: '#'},
            {name: 'homstay', link: '#'},
            {name: 'Du lịch đây đó', link: '#'}
        ]},
    {   name: 'Bất động sản', link: '#',
        subCategory: [
            {name: 'Dự án', link: '#'},
            {name: 'Nội thất', link: '#'},
            {name: 'Tư vấn', link: '#'},
            {name: 'Thị trường', link: '#'},
            {name: 'Nhà đẹp', link: '#'},
            {name: 'Cơ hội an cư', link: '#'}
        ]},
    {   name: 'Xe', link: '#',
        subCategory: [
            {name: 'Xe mới', link: '#'},
            {name: 'Khám phá', link: '#'},
            {name: 'Diễn đàn', link: '#'},
            {name: 'Tư vấn', link: '#'},
            {name: 'Đánh giá xe', link: '#'},
            {name: 'Giá xe', link: '#'},
            {name: 'Dữ liệu xe', link: '#'}
        ]},
    {   name: 'Bạn đọc', link: '#',
        subCategory: [
            {name: 'Hồi âm', link: '#'},
            {name: 'Chia sẻ', link: '#'},
            {name: 'Thơ', link: '#'},
            {name: 'Ngày tươi sáng', link: '#'}
        ]}
]

function Header({ activeCategory, goHome, search }: HeaderProps) {
    const [keyword, setKeyword] = useState('')
    const [isMenu, setMenu] = useState(false)
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
                    <img src={logo} alt="VietNamNet"/>
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
                        <li className="category-item" key={category.name}>
                            <a href={category.link} className={activeCategory === category.name || category.subCategory.some((sub) => sub.name === activeCategory) ? 'active' : ''}
                               onClick={(e) => {
                                   if (category.link === '#') e.preventDefault()
                               }}>{category.name}</a>

                            {category.subCategory.length > 0 && (
                                <ul className="dropdown-menu"> {category.subCategory.map((sub) => (
                                <li key={sub.name}> <a href={sub.link} onClick={(e) => {
                                    if (sub.link === '#') e.preventDefault()
                                }}>{sub.name}</a></li>
                            ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    <li className="menu"><button type="button" className="menu-toggle" onClick={() => setMenu(!isMenu)}
                    aria-label="Tất cả các danh mục" aria-expanded={isMenu}>{isMenu ? 'X' : '☰'}</button></li>
                </ul>
            </nav>

            {isMenu && (<div className="category-menu">
                            <div className="header-container">
                                <div className="all-category">
                                    <h3>Tất cả các chuyên mục</h3>
                                </div>
                                <div className="category-grid">{categories.map((category) => (
                                    <div className="group" key={category.name}>
                                        <ul>{category.subCategory.map((sub) => (
                                            <li key={sub.name}> <a href={sub.link} onClick={(e) => {
                                                if (sub.link === '#') e.preventDefault()
                                            }}
                                            >{sub.name}</a></li>
                                        ))}</ul>
                                    </div>
                                ))}</div>
                            </div>
            </div>)}
        </header>
    )
}

export default Header