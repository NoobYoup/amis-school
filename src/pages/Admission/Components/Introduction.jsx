import styles from './Introduction.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Introduction() {
    return (
        <section className={cx('introduction-section')} id="gioi-thieu">
            <div className="container">
                <h2 className={cx('section-title')}>Về Trường Quốc Tế AMIS</h2>
                <p className={cx('section-subtitle')}>Australian American International School</p>

                <div className="row">
                    <div className="col-lg-12">
                        <div className={cx('intro-card')}>
                            <h3>
                                <i className="fas fa-school me-2"></i>Hệ Thống Giáo Dục Đa Cấp
                            </h3>
                            <p>
                                Trường Quốc Tế AMIS bao gồm 2 hệ thống: <strong>Tiểu học</strong> và{' '}
                                <strong>Trung Học Cơ Sở</strong>. Chúng tôi tự hào mang đến một chương trình giáo dục
                                toàn diện, kết hợp giữa chương trình Bộ Giáo Dục Việt Nam và phương pháp giảng dạy tiên
                                tiến của Mỹ.
                            </p>

                            <div className={cx('highlight-box')}>
                                <h4>Buổi Sáng - Chương Trình Tiếng Việt</h4>
                                <p>
                                    Học sinh học chương trình Tiếng Việt của Bộ Giáo Dục nhưng được dạy theo phương pháp
                                    giảng dạy của Mỹ, tập trung rèn luyện các kỹ năng quan trọng:
                                </p>
                                <ul className={cx('feature-list')}>
                                    <li>
                                        <strong>Kỹ năng giao tiếp:</strong> Giúp bé tự tin thể hiện ý kiến và tương tác
                                        hiệu quả
                                    </li>
                                    <li>
                                        <strong>Kỹ năng làm việc nhóm:</strong> Tương tác và lặp lại thông tin để bé nhớ
                                        kiến thức lâu dài
                                    </li>
                                    <li>
                                        <strong>Kỹ năng thuyết trình:</strong> Luyện tập kỹ năng lãnh đạo và nghệ thuật
                                        nói trước công chúng
                                    </li>
                                    <li>
                                        <strong>Kỹ năng xử lý tình huống:</strong> Phát triển khả năng tư duy độc lập và
                                        sáng tạo
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('highlight-box')}>
                                <h4>Buổi Chiều - Chương Trình Tiếng Anh Quốc Tế</h4>
                                <p>Học sinh được đắm chìm trong môi trường tiếng Anh với giáo viên bản xứ:</p>
                                <ul className={cx('feature-list')}>
                                    <li>
                                        <strong>Toán Quốc Tế:</strong> Học các thuật ngữ toán học và làm toán bằng tiếng
                                        Anh
                                    </li>
                                    <li>
                                        <strong>Science (Khoa Học):</strong> Học thuật ngữ khoa học và nghiên cứu dự án
                                        bằng tiếng Anh
                                    </li>
                                    <li>
                                        <strong>Kỹ năng giao tiếp tiếng Anh:</strong> Phát âm và nói chuẩn với giáo viên
                                        bản xứ
                                    </li>
                                    <li>
                                        <strong>Kỹ năng thuyết trình tiếng Anh:</strong> Tự tin trình bày ý tưởng bằng
                                        tiếng Anh
                                    </li>
                                    <li>
                                        <strong>Kỹ năng đọc và viết:</strong> Phát triển năng lực ngôn ngữ toàn diện
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className={cx('intro-card')}>
                            <h3>
                                <i className="fas fa-dollar-sign me-2"></i>Học Phí Hợp Lý
                            </h3>
                            <p>
                                Đây là chương trình giáo dục và đào tạo của Mỹ được tài trợ bởi{' '}
                                <strong>Tập đoàn Giáo dục Madison của Mỹ</strong>, nên học phí ở mức{' '}
                                <strong>bằng 1/2 hoặc 1/3</strong> so với các trường quốc tế khác có cùng bản chất.
                            </p>

                            <div className={cx('highlight-box')}>
                                <h4>Mức Học Phí:</h4>
                                <ul className={cx('feature-list')}>
                                    <li>
                                        Lớp 1-5: Khoảng <strong>6 triệu đồng/tháng</strong>
                                    </li>
                                    <li>
                                        Lớp 6-9: Khoảng <strong>7 triệu đồng/tháng</strong>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('note-box')}>
                                <h4>Học phí trọn gói bao gồm:</h4>
                                <ul>
                                    <li>Chi phí quản lý bán trú</li>
                                    <li>Phí dụng cụ và phương tiện bán trú</li>
                                    <li>Phí môn tiếng Anh tăng cường với giáo viên nước ngoài</li>
                                    <li>Tiền ăn 3 bữa (sáng, trưa, xế)</li>
                                    <li>Ở bán trú</li>
                                </ul>
                                <p style={{ marginTop: '15px', fontWeight: 600, color: '#856404' }}>
                                    Phụ huynh KHÔNG phải đóng thêm bất kỳ chi phí nào khác!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={cx('intro-card')}>
                            <h3>
                                <i className="fas fa-star me-2"></i>Cam Kết Chất Lượng
                            </h3>
                            <p>Tại AMIS, chúng tôi cam kết:</p>
                            <ul className={cx('feature-list')}>
                                <li>Bé sẽ được phát triển toàn diện về cả kiến thức và kỹ năng</li>
                                <li>Rèn luyện các kỹ năng quan trọng cho sự thành công trong cuộc sống và công việc</li>
                                <li>Không học tủ, học vẹt hay nhồi nhét</li>
                                <li>Không áp lực về học tập</li>
                                <li>Không cần học thêm ngoài giờ ở nhà giáo viên</li>
                                <li>Cơ hội giáo dục công bằng cho tất cả học sinh</li>
                            </ul>

                            <div className={cx('highlight-box')}>
                                <h4>Thời Khóa Biểu:</h4>
                                <p>
                                    <strong>Buổi sáng:</strong> Chương trình Tiếng Việt (Bộ Giáo Dục) dạy theo phương
                                    pháp Mỹ
                                </p>
                                <p>
                                    <strong>Buổi chiều:</strong> Toàn bộ chương trình tiếng Anh với giáo viên bản xứ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
