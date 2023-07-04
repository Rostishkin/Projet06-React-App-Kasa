import {Link} from 'react-router-dom';
import logo from "../assets/logo-footer.svg"
import '../sass/components/Footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className='logo-footer'/>
            </Link>            
            <p className='footer-copyright'> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}
