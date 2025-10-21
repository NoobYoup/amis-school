import './Header.scss';
import { Link } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';

const Header = () => {
    const navLinks = [
        { to: '/admission', label: 'Tuyển sinh' },
        { to: '/activities', label: 'Hoạt động' },
        { to: '/information', label: 'Thông tin' },
        { to: '/news', label: 'Tin tức' },
        { to: '/documents', label: 'Văn bản' },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="/images/logo_amis.png" className="logo-image" alt="Amis" />
                    <strong style={{ color: '#183f6d' }}>AMIS</strong>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map((link) => (
                            <NavLinkItem key={link.to} to={link.to} label={link.label} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
