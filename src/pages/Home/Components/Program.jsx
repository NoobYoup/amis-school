import styles from "./Program.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Program() {
    return (
        <section id="programs" className={cx("programs-section")}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-5 fw-bold mb-3">
                            Chương trình đào tạo
                        </h2>
                        <p className="lead">
                            Chương trình giảng dạy theo phương châm 5T và chuẩn
                            quốc tế
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className={cx("program-card")}>
                            <div className={cx("program-header")}>
                                <h3>
                                    <i className="fas fa-child me-2"></i>Chương
                                    trình Tiểu học & Trung học
                                </h3>
                            </div>
                            <div className={cx("program-content")}>
                                <p>
                                    <strong>Phương châm 5T:</strong> "Tâm hồn,
                                    Tổ chất, Thói quen, Tình độc lập và Trí sáng
                                    tạo"
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Môn học cơ bản:</h5>
                                        <ul className={cx("program-list")}>
                                            <li>Toán</li>
                                            <li>Tiếng Việt</li>
                                            <li>Tiếng Anh</li>
                                            <li>Khoa Học Tự Nhiên</li>
                                            <li>Lịch Sử & Địa Lý</li>
                                            <li>Giáo Dục Công Dân</li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <h5>Môn học năng khiếu:</h5>
                                        <ul className={cx("program-list")}>
                                            <li>Mỹ Thuật</li>
                                            <li>Âm Nhạc</li>
                                            <li>Tin Học</li>
                                            <li>Công nghệ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className={cx("program-card")}>
                            <div className={cx("program-header")}>
                                <h3>
                                    <i className="fas fa-graduation-cap me-2"></i>
                                    Chứng chỉ Quốc tế
                                </h3>
                            </div>
                            <div className={cx("program-content")}>
                                <p>
                                    <strong>Luyện thi các chứng chỉ:</strong>
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className={cx("program-list")}>
                                            <li>STARTERS</li>
                                            <li>MOVERS</li>
                                            <li>FLYERS</li>
                                            <li>KET</li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className={cx("program-list")}>
                                            <li>PET</li>
                                            <li>FCE</li>
                                            <li>TOEIC</li>
                                            <li>TOEFL</li>
                                            <li>IELTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Program;
