import '../style/Logements.css'
import { useParams, Navigate} from 'react-router-dom'; //useParams hook qui permet d'ajouter un router et controler la navigation d'utilisateur dans l'appli
import logementsData from '../data/logements.json'; // datas logement
import Collapse from '../components/Collapse'; //collapse 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../components/Slideshow';

//fonction Logements

export default function Logements() {
    const {id} = useParams();

    const logements = logementsData.find ((item) => item.id === id);

    if (!logements) {
        return <Navigate to='/*'></Navigate>
    }

    const {title, pictures, description, host, rating, location, equipments, tags} = logements;
    
    //equiments
    const listeEquipements = () => {
        return (
            <ul className='liste-equipements'>
                {equipments.map((equipment) => (
                    <li className='equipement' 
                    key={equipment} > {equipment}</li>
                ))}
            </ul>
        );
    };

    //ajout de rating
    const ratingStars = () => {
        const stars = [];

        for(let i = 0; i < 5; i++) {
            const starClass = i < rating ? 'star-active' : 'star-inactive';
            stars.push (
                <FontAwesomeIcon icon={faStar} className={starClass} key={i}/>
            );
        };
    return stars;
    };

    //slideshow
    return (
    <main>
        <Slideshow images={pictures} />
        <div className='logement-info'>
            <div className='text-logement'>
                <h1 className='logement-info--nom font'>{title}</h1>
                <h2 className='logement-info--emplacement font'>{location}</h2>
                <ul className='logement--liste-tag'>
                    {tags.map ((tag) => (
                        <li className='logement--tag'key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className='logement-info--hote'>
                <figure className='logement-info--hote-identity'>
                    <img className='logement-info--photo-hote' src={host.picture} alt={host.name}></img>
                    <figcaption className='logement-info--nom-hote font'>{host.name}</figcaption>
                </figure>
                <div className='rating-logement'>
                    {ratingStars()}
                </div>
            </div>
        </div>
        <div className='collapsess-logement'>
            <Collapse title='Description' text={description} customClasses='collapse-logement' />
            <Collapse title='Équipements' text={listeEquipements()} customClasses='collapse-logement' />
        </div>
    </main>
    );
};