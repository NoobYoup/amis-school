import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="footer-logo">AMIS School</div>
                            <p>
                                Australian American International School - Nơi ươm mầm tương lai cho thế hệ trẻ với chất
                                lượng giáo dục quốc tế.
                            </p>
                            <div className="social-links">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <h5>Liên kết nhanh</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#about" className="text-white-50">
                                        Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <a href="#programs" className="text-white-50">
                                        Chương trình học
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="text-white-50">
                                        Đặc điểm nổi bật
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-white-50">
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <h5>Đối tác</h5>
                            <p className="text-white-50">
                                <i className="fas fa-university me-2"></i>University of Cambridge
                                <br />
                                <i className="fas fa-university me-2"></i>University of Wisconsin
                                <br />
                                <i className="fas fa-certificate me-2"></i>ETS - Educational Testing Service
                                <br />
                                <i className="fas fa-university me-2"></i>University of Michigan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-white-50">&copy; 2025 AMIS School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
