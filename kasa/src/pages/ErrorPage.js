import {Link} from 'react-router-dom';
import '../sass/pages/ErrorPage.scss';

//ErrorPage
//link to '/' retour page home
export default function ErrorPage () {
    return (
    <main>
        <div className='error'>
        <h1 className='error-titre'>404</h1>
        <h2 className='error-message'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to={`/`} className='error-comeback-message'>
        Retourner sur la page d’accueil
        </Link>
        </div>
    </main>
    )
}