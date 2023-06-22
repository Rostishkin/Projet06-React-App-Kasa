import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <p>Kasa</p>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À Propos</Link>
            </nav>
        </div>
    )
}