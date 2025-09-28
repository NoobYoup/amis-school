import "./Footer.scss";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="footer-logo">AMIS School</div>
                            <p>
                                Australian American International School - Nơi
                                ươm mầm tương lai cho thế hệ trẻ với chất lượng
                                giáo dục quốc tế.
                            </p>
                            <div class="social-links">
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <h5>Liên kết nhanh</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#about" class="text-white-50">
                                        Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <a href="#programs" class="text-white-50">
                                        Chương trình học
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" class="text-white-50">
                                        Đặc điểm nổi bật
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" class="text-white-50">
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <h5>Đối tác</h5>
                            <p class="text-white-50">
                                <i class="fas fa-university me-2"></i>University
                                of Cambridge
                                <br />
                                <i class="fas fa-university me-2"></i>University
                                of Wisconsin
                                <br />
                                <i class="fas fa-certificate me-2"></i>ETS -
                                Educational Testing Service
                                <br />
                                <i class="fas fa-university me-2"></i>University
                                of Michigan
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-white-50">
                        &copy; 2025 AMIS School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
