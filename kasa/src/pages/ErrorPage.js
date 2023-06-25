import {Link} from 'react-router-dom';
import '../style/ErrorPage.css';

export default function ErrorPage () {
    return (
    <main>
    <h1 className='error'>404</h1>
    <h2 className='error-message'>Oups! La page que vous demandez n'existe pas.</h2>
    <Link to={`/`} className='comeback-message'>
    Retourner sur la page d’accueil
    </Link>        
</main>
    )
}