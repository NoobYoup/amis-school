import styles from "./Feature.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Feature() {
    return (
        <section id="features" className={cx("feature-section")}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-5 fw-bold mb-3">
                            Phát triển năng khiếu toàn diện
                        </h2>
                        <p className="lead">
                            AMIS cam kết phát triển 5 kỹ năng cốt lõi cho học
                            sinh
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-comments"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Kỹ năng giao tiếp
                            </h3>
                            <p>
                                Phát triển khả năng giao tiếp hiệu quả bằng
                                tiếng Anh và tiếng Việt
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Kỹ năng làm việc nhóm
                            </h3>
                            <p>
                                Học cách hợp tác, lãnh đạo và làm việc hiệu quả
                                trong nhóm
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Kỹ năng thuyết trình
                            </h3>
                            <p>
                                Tự tin thể hiện ý tưởng và trình bày trước đám
                                đông
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Kỹ năng xử lý tình huống
                            </h3>
                            <p>
                                Phát triển khả năng giải quyết vấn đề và xử lý
                                tình huống
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Kỹ năng nghe, nói, đọc, viết
                            </h3>
                            <p>Thành thạo 4 kỹ năng cơ bản bằng tiếng Anh</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className={cx("feature-card")}>
                            <div className={cx("feature-icon")}>
                                <i className="fas fa-globe"></i>
                            </div>
                            <h3 className={cx("feature-title")}>
                                Tầm nhìn quốc tế
                            </h3>
                            <p>
                                Giáo dục theo tiêu chuẩn quốc tế, chuẩn bị du
                                học
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
