import {Link, useLocation} from "react-router-dom";
import logo from '../assets/logo.svg';
import '../style/Header.css';

export default function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img className="header-logo" src={logo} alt="Logo" />
            </Link>
            <nav className="nav">
                <Link to="/" className={`navigation-link ${location.pathname === '/' ? 'navigation-link--active' : ''}`}>
                    Accueil
                </Link>
                <Link to="/a-propos-de-nous" className={`navigation-link ${location.pathname === '/a-propos-de-nous' ? 'navigation-link--active': ''}`}>
                    A Propos
                </Link>
            </nav>
        </header>
    )
}
