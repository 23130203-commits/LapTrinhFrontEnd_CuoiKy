import {useState} from "react";
import type {MouseEvent} from "react";
import './css/categoryMenu.css'

interface CategoryMenuProps {
    activeCategory?: string
    goHome?: () => void
    selectCategory?: (category: string) => void
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

function CategoryMenu({activeCategory, goHome, selectCategory} : CategoryMenuProps) {
    const [isMenu, setIsMenu] = useState(false)
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [closeCategory, setCloseCategory] = useState<string | null>(null)
    const handleClick = (e: MouseEvent<HTMLAnchorElement>, name: string, parentCategory: string = name) => {
        e.preventDefault()
        selectCategory?.(name)
        setIsMenu(false)
        setOpenCategory(null)
        setCloseCategory(parentCategory)
    }
    return (
        <>
            <nav className="header-nav" aria-label="Danh mục tin tức">
                <ul className="header-container header-nav-list">
                    <li className="home-item">
                        <a href="#" aria-label="Trang chủ" title="Trang chủ"
                           className={!activeCategory ? 'active' : ''}
                           onClick={(e) => { e.preventDefault(); goHome?.(); setIsMenu(false) }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
                            </svg>
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className="category-item" key={category.name} onMouseEnter={() => {
                            if (closeCategory !== category.name) setOpenCategory(category.name)
                        }}
                            onMouseLeave={() => {
                                setOpenCategory(null)
                                setCloseCategory(null)
                            }}>
                            <a href={category.link}
                               className={activeCategory === category.name || category.subCategory.some(sub => sub.name === activeCategory) ? 'active' : ''}
                               onClick={(e) => handleClick(e, category.name)}>
                                {category.name}
                            </a>
                            {category.subCategory.length > 0 && (
                                <ul className="dropdown-menu" style={{display: openCategory === category.name ? 'block' : 'none'}}>
                                    {category.subCategory.map(sub => (
                                        <li key={sub.name}>
                                            <a href={sub.link} onClick={(e) => handleClick(e, sub.name, category.name)}>{sub.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li className="menu">
                        <button type="button" className="menu-toggle"
                                onClick={() => setIsMenu(!isMenu)}
                                aria-label="Tất cả chuyên mục" aria-expanded={isMenu}>
                            {isMenu ? '✕' : '☰'}
                        </button>
                    </li>
                </ul>
            </nav>
            {isMenu && (
                <div className="category-menu">
                    <div className="header-container">
                        <div className="all-category">
                            <h3>Tất cả chuyên mục</h3>
                        </div>
                        <div className="category-grid">
                            {categories.map(category => (
                                <div className="group" key={category.name}>
                                    <ul>
                                        {category.subCategory.map(sub => (
                                            <li key={sub.name}>
                                                <a href={sub.link} onClick={(e) => handleClick(e, sub.name, category.name)}>{sub.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default CategoryMenu