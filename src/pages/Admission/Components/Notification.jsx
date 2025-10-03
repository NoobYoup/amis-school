import styles from './Notification.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <section className={cx('admission-notice-section')}>
            <div className="container">
                <div className={cx('notice-card')}>
                    <div className={cx('notice-header')}>
                        <h2>THÔNG BÁO TUYỂN SINH</h2>
                        <p className={cx('school-year')}>Năm học 2025 – 2026</p>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-info-circle me-2"></i>I. THÔNG TIN TUYỂN SINH
                        </h3>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Cấp học:</div>
                            <div className={cx('info-value')}>
                                <strong>Tiểu học:</strong> Lớp 1 – 5 / Grade 1 – 5 <br />
                                <strong>Trung học cơ sở:</strong> Lớp 6 – 9 / Grade 6 – 9
                            </div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Địa chỉ:</div>
                            <div className={cx('info-value')}>620 Minh Phụng St., Ward 2, Dist. 6, HCMC</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Điện thoại:</div>
                            <div className={cx('info-value')}>028.39695278 – 028.39695280</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Hotline:</div>
                            <div className={cx('info-value')}>083.456.6818 – Ts. Tony Nguyen</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Email:</div>
                            <div className={cx('info-value')}>tuvan.amis@yahoo.com.vn</div>
                        </div>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-calendar-alt me-2"></i>II. THỜI GIAN DỰ TUYỂN
                        </h3>
                        <p>
                            Nhà Trường bắt đầu nhận hồ sơ: <strong>từ tháng 03 năm 2025</strong>
                        </p>
                        <p>(Registration starts from March 2025)</p>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-money-bill-wave me-2"></i>III. CHI PHÍ HỌC TẬP VÀ SINH HOẠT
                        </h3>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Phí ghi danh:</div>
                            <div className={cx('info-value')}>
                                <strong>1.500.000 đồng / học sinh</strong>
                                <br />
                                (Enrollment fee is applied when student admits the registration form)
                            </div>
                        </div>

                        <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>
                            Học phí tháng (Tuition fee per month):
                        </h4>
                        <table className={cx('fee-table')}>
                            <thead>
                                <tr>
                                    <th>Lớp / Grade</th>
                                    <th>Học phí tháng / Per month (VND)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pre</td>
                                    <td>
                                        <strong>5,690,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <strong>5,690,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <strong>5,690,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <strong>6,290,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <strong>6,490,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <strong>6,390,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <strong>7,290,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>
                                        <strong>7,590,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>
                                        <strong>7,590,000</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>
                                        <strong>7,690,000</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-sticky-note me-2"></i>IV. GHI CHÚ
                        </h3>

                        <div className={cx('note-box')}>
                            <h4>Học phí bao gồm:</h4>
                            <ul>
                                <li>Chi phí ăn sáng, ăn trưa và ăn xế</li>
                            </ul>
                        </div>

                        <div className={cx('note-box')}>
                            <h4>Học phí chưa bao gồm:</h4>
                            <ul>
                                <li>Phí đồng phục</li>
                                <li>Phí ngoại khóa</li>
                                <li>Phí sách giáo khoa</li>
                                <li>Phí cơ sở vật chất</li>
                            </ul>
                        </div>

                        <div className={cx('highlight-box')}>
                            <h4>Lịch nộp học phí (4 đợt/năm học):</h4>
                            <ul className={cx('feature-list')}>
                                <li>
                                    <strong>Đợt 1:</strong> Ngày 01/08/2025 (2 tháng)
                                </li>
                                <li>
                                    <strong>Đợt 2:</strong> Ngày 01/10/2025 (3 tháng)
                                </li>
                                <li>
                                    <strong>Đợt 3:</strong> Ngày 01/01/2026 (2 tháng)
                                </li>
                                <li>
                                    <strong>Đợt 4:</strong> Ngày 01/03/2026 (3 tháng)
                                </li>
                            </ul>
                        </div>

                        <div
                            className={cx('highlight-box')}
                            style={{ background: '#d4edda', borderLeftColor: '#28a745' }}
                        >
                            <h4 style={{ color: '#155724' }}>Chính sách giảm học phí:</h4>
                            <ul className={cx('feature-list')}>
                                <li>
                                    <strong>Học sinh thứ 2</strong> trong cùng gia đình: Giảm <strong>5%</strong> học
                                    phí
                                </li>
                                <li>
                                    <strong>Học sinh thứ 3:</strong> Giảm <strong>10%</strong> học phí
                                </li>
                            </ul>
                        </div>

                        <div
                            className={cx('info-row')}
                            style={{ background: 'var(--bg-light)', padding: '15px', borderRadius: '10px' }}
                        >
                            <div className={cx('info-label')}>Phí cơ sở vật chất:</div>
                            <div className={cx('info-value')}>
                                <strong>2.990.000 đồng / năm</strong> (Facilities fee)
                            </div>
                        </div>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-list-ul me-2"></i>V. CÁC KHOẢN KHÁC
                        </h3>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Sách giáo khoa:</div>
                            <div className={cx('info-value')}>Theo giá NXB</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Đồng phục:</div>
                            <div className={cx('info-value')}>Học sinh mặc đồng phục theo quy định</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Bữa ăn:</div>
                            <div className={cx('info-value')}>Sáng, trưa và xế (bao gồm trong học phí)</div>
                        </div>
                        <div className={cx('info-row')}>
                            <div className={cx('info-label')}>Bảo hiểm:</div>
                            <div className={cx('info-value')}>Theo quy định của cơ quan BHYT</div>
                        </div>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-book me-2"></i>VI. CHƯƠNG TRÌNH HỌC
                        </h3>

                        <div className={cx('highlight-box')}>
                            <h4>Chương trình giảng dạy:</h4>
                            <ul className={cx('feature-list')}>
                                <li>
                                    <strong>Tiếng Việt:</strong> Theo chương trình Bộ GD&ĐT
                                </li>
                                <li>
                                    <strong>Tiếng Anh, Toán, Khoa học:</strong> Giảng dạy bởi giáo viên nước ngoài
                                </li>
                            </ul>
                        </div>

                        <div className={cx('highlight-box')}>
                            <h4>Kỹ năng phát triển:</h4>
                            <ul className={cx('feature-list')}>
                                <li>Kỹ năng giao tiếp (Communication skills)</li>
                                <li>Kỹ năng làm việc nhóm (Teamwork skills)</li>
                                <li>Kỹ năng thuyết trình (Presentation skills)</li>
                                <li>Kỹ năng tư duy giải quyết vấn đề (Problem-solving skills)</li>
                            </ul>
                        </div>

                        <p
                            style={{
                                marginTop: '20px',
                                padding: '15px',
                                background: 'var(--bg-light)',
                                borderRadius: '10px',
                                fontWeight: 600,
                            }}
                        >
                            Chương trình kết hợp giữa Bộ Giáo dục Việt Nam và Chương trình Quốc tế AMIS (Australian
                            American International School Program)
                        </p>
                    </div>

                    <div className={cx('notice-section')}>
                        <h3>
                            <i className="fas fa-check-circle me-2"></i>VII. ĐIỀU KIỆN DỰ TUYỂN
                        </h3>

                        <div className="requirement-box">
                            <h4>Yêu cầu học tập:</h4>
                            <ul className={cx('feature-list')}>
                                <li>Hồ sơ học tập đầy đủ theo quy định của Bộ GD&ĐT</li>
                                <li>
                                    Học sinh phải có học lực đạt <strong>trung bình khá trở lên</strong>
                                </li>
                            </ul>
                        </div>

                        <div className="requirement-box">
                            <h4>Hồ sơ dự tuyển bao gồm:</h4>
                            <ul className={cx('feature-list')}>
                                <li>Đơn xin nhập học</li>
                                <li>Bản sao giấy khai sinh</li>
                                <li>Giấy khám sức khỏe</li>
                                <li>Kết quả học tập 2 năm gần nhất</li>
                                <li>04 ảnh 3x4</li>
                                <li>Bản sơ yếu lý lịch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notification;
