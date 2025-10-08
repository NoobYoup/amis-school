import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('contact-info-section')} id="contact">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-5 fw-bold mb-3">Thông tin liên hệ</h2>
                        <p className="lead">Liên hệ với chúng tôi để được tư vấn chi tiết</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className={cx('contact-card')}>
                            <i className="fas fa-map-marker-alt"></i>
                            <h5>Địa chỉ trường</h5>
                            <p>
                                620 Minh Phụng, Phường Bình Tây <br />
                                Thành phố Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className={cx('contact-card')}>
                            <i className="fas fa-phone"></i>
                            <h5>Hotline tuyển sinh</h5>
                            <p>
                                028.39695278 - 028.39695280
                                <br />
                                Tiến sĩ Tony Nguyễn:
                                <br />
                                01234566818
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                        <div className={cx('contact-card')}>
                            <i className="fas fa-envelope"></i>
                            <h5>Email</h5>
                            <p>
                                tuvan.amis@yahoo.com.vn
                                <br />
                                info@amis.edu.vn
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;
