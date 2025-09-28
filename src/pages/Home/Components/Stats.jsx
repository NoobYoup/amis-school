import styles from "./Stats.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Stats() {
    return (
        <section className={cx("stats-section")}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className={cx("stat-card")}>
                            <span className={cx("stat-number")}>15+</span>
                            <div className={cx("stat-label")}>
                                Năm kinh nghiệm
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className={cx("stat-card")}>
                            <span className={cx("stat-number")}>500+</span>
                            <div className={cx("stat-label")}>Học sinh</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className={cx("stat-card")}>
                            <span className={cx("stat-number")}>50+</span>
                            <div className={cx("stat-label")}>Giáo viên</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className={cx("stat-card")}>
                            <span className={cx("stat-number")}>100%</span>
                            <div className={cx("stat-label")}>Chất lượng</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
