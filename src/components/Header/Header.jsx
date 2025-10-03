import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        src="/images/logo_amis-removebg-preview.png"
                        className="logo-image"
                        alt="Amis"
                    />
                    <strong style={{ color: "#183f6d" }}>AMIS</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
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
                            <Link to="/english-center" className="nav-link">
                                Trung tâm Anh Ngữ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#programs">
                                Chương trình đào tạo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
