import styles from './Hero.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <section className={cx('cta-section')}>
            <div className="container">
                <div className={cx('cta-content', 'py-5')}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-4 fw-bold mb-4">Sẵn sàng cho tương lai của con?</h2>
                            <p className="lead mb-5">
                                Đừng bỏ lỡ cơ hội để con được tiếp cận với nền giáo dục quốc tế chất lượng cao tại AMIS.
                                Hãy đăng ký ngay hôm nay!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
