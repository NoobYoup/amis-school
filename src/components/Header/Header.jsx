import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="/images/logo_amis-removebg-preview.png" className="logo-image" alt="Amis" />
                    <strong style={{ color: '#183f6d' }}>AMIS</strong>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/admission" className="nav-link">
                                Tuyển sinh
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/activities" className="nav-link">
                                Hoạt động
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/information" className="nav-link">
                                Thông tin
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link">
                                Tin tức
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/documents" className="nav-link">
                                Văn bản
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
