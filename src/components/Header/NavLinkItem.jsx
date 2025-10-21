import { Link } from 'react-router-dom';
import './Header.scss';

const NavLinkItem = ({ to, label }) => (
    <li className="nav-item">
        <Link to={to} className="nav-link">
            {label}
        </Link>
    </li>
);

export default NavLinkItem;
