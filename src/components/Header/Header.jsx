import "./Header.scss";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="/images/logo_amis-removebg-preview.png"
                        className="logo-image"
                        alt="Amis"
                    />
                    <strong style={{ color: "#183f6d" }}>AMIS</strong>
                </a>
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
                            <a className="nav-link" href="#home">
                                Tuyển sinh
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                Trung tâm Anh Ngữ
                            </a>
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
