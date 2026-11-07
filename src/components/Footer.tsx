import './css/footer.css'
import logo from '../assets/VNN.png'

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

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="infor">
                    <div className="logo">
                        <img src={logo} alt="VietNamNet"/>
                    </div>
                    <p>Cơ quan chủ quản: Bộ Dân tộc và Tôn giáo</p>
                    <p>Số giấy phép:     </p>
                    <p>Tổng biên tập:    </p>
                    <p>Địa chỉ:          </p>
                    <p>Điện thoại:    - Hotline: </p>
                    <p>Email:            </p>
                    <p>Theo dõi VietNamNet trên</p>
                </div>

                {columns.map((col) => (
                    <div className="row" key={col.title}>
                        <h1>{col.title}</h1>
                        <ul>
                            {col.items.map((item) => (
                                <li key={item}><a href="#">{item}</a></li>
                            ))}
                        </ul>
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