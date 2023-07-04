import {Link, useLocation} from "react-router-dom";
import logo from '../assets/logo.svg';
import '../sass/components/Header.scss';

export default function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img className="header--logo" src={logo} alt="Logo" />
            </Link>
            <nav className="header-navigation">
                <Link to="/" className={`header-navigation-link ${location.pathname === '/' ? 'header-navigation-link--active' : ''}`}>
                    Accueil
                </Link>
                <Link to="/a-propos-de-nous" className={`header-navigation-link ${location.pathname === '/a-propos-de-nous' ? 'header-navigation-link--active': ''}`}>
                    À Propos
                </Link>
            </nav>
        </header>
    )
}
