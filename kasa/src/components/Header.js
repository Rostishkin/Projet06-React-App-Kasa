import {Link, useLocation} from "react-router-dom";
import logo from '../assets/logo.svg';
import '../style/Header.css';

export default function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <nav className="nav">
                <Link to="/" className={`navigation-link ${location.pathname === '/' ? 'active-link' : ''}`}>
                    Accueil
                </Link>
                <Link to="/a-propos-de-nous" className={`navigation-link ${location.pathname === '/a-propos-de-nous' ? 'active-link': ''}`}>
                    A Propos
                </Link>
            </nav>
        </header>
    )
}
