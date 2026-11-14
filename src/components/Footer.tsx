import './css/footer.css'
import {type MouseEvent} from 'react'
import logo from '../assets/VNN.png'
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa6'

const cot1 = ["Chính trị", "Thời sự", "Kinh doanh", "Dân tộc và tôn giáo", "Thể thao", "Giáo dục"]
const cot2 = ["Thế giới", "Đời sống", "Văn hóa - Giải trí", "Sức khỏe", "Công nghệ", "Ô tô - xe máy"]
const cot3 = ["Du lịch", "Bất động sản", "Bạn đọc", "Tuần Việt Nam", "Công nghiệp hỗ trợ", "Nông thôn mới"]
const cot4 = ["Hồ sơ", "Ảnh", "Video", "Multimedia", "Podcast", "24h qua"]
const lienHe = ["Liên hệ tòa soạn", "Liên hệ quảng cáo", "Tải ứng dụng", "Độc giả gửi bài", "Tuyển dụng", "Lịch vạn niên"]
const columns = [
    { title: "Chuyên mục", items: cot1 },
    { title: "Xã hội", items: cot2 },
    { title: "Kinh tế - Đời sống", items: cot3 },
    { title: "Đa phương tiện", items: cot4 },
    { title: "Liên hệ", items: lienHe }]

interface FooterProps {
    goHome?: () => void
    selectCategory?: (category: string) => void
}

function Footer({goHome, selectCategory}: FooterProps) {
    const year = new Date().getFullYear();
    const handleLink = (e: MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault()
        selectCategory?.(item)
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="infor">
                    <div className="logo">
                        <a href="/" onClick={(e) => {
                            e.preventDefault()
                            goHome?.()
                        }}><img src={logo} alt="VietNamNet"/>
                        </a>
                    </div>
                    <p>Cơ quan chủ quản: Bộ Dân tộc và Tôn giáo</p>
                    <p>Số giấy phép: DEMO-FE-2026</p>
                    <p>Tổng biên tập: Ban biên tập website mô phỏng</p>
                    <p>Địa chỉ: Quận 1, TP. Hồ Chí Minh</p>
                    <p>Điện thoại: 028 1234 5678 - Hotline: 1900 0000</p>
                    <p>Email: contact@example.com</p>
                    <p>Theo dõi VietNamNet trên: Facebook, YouTube, TikTok</p>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/vietnamnet.vn"><FaFacebookF /></a>
                        <a href="https://www.youtube.com/c/B%C3%A1oVietNamNetTV"><FaYoutube /></a>
                        <a href="https://www.tiktok.com/@vietnamnet.vn"><FaTiktok /></a>
                    </div>
                </div>

                {columns.map((col) => (
                    <div className="row" key={col.title}>
                        <h2>{col.title}</h2>
                        <ul>{col.items.map((item) => (
                            <li key={item}>
                                <a href="#" onClick={(e) => handleLink(e, item)}>{item}</a>
                            </li>
                        ))}</ul>
                    </div>
                ))}
            </div>
            <div className="bottom">
                <p>
                    © 1997 - {year} Báo VietNamNet. All rights reserved. Chỉ được phát
                    hành lại thông tin từ website này khi có sự đồng ý bằng văn bản
                    của báo VietNamNet.
                </p>
                <p>
                    Công ty Cổ phần Truyền thông VietNamNet
                    Hotline:
                    Email:
                    Báo giá:
                    Hỗ trợ kỹ thuật: support@tech.vietnamnet.vn
                </p>
            </div>
        </footer>
    )
}
export default Footer;