import styles from "./Hero.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Hero() {
    return (
        <section id="home" className={cx("hero")}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={cx("hero-content", "fade-in-up")}>
                            <h1>AMIS School</h1>
                            <p className="lead">
                                Trường Tiểu học & Trung học Cơ sở Quốc tế Mỹ Úc
                            </p>
                            <p>
                                Công nghệ đào tạo tiên tiến - Chất lượng giảng
                                dạy vượt trội
                            </p>
                            {/* <button className={`${cx("btn-custom")}`}>
                                <i className="fas fa-play me-2"></i>Tìm hiểu
                                thêm
                            </button> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img
                                src="/images/hero_backround.jpg"
                                alt="AMIS School"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
