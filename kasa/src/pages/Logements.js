import { useParams } from 'react-router-dom'; //useParams hook qui permet d'ajouter un router et controler la navigation d'utilisateur dans l'appli
import logementsData from '../data/logements.json'; // datas logement
import Collapse from '../components/Collapse'; //collapse 
import Slideshow from '../components/Slideshow'; //slideshow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//fonction Logements

export default function Logements() {
    const {id} = useParams();
    const logements = logementsData.find ((item) => item.id === id);
    const {title, pictures, description, host, rating, location, equipments, tags} = logements;
    
    //equimenets
    const listeEquipements = () => {
        return (
            <ul className='liste-equipements'>
                {equipments.map((equipment) => (
                    <li className='equipement' key={equipment}>{equipment}</li>
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
    }

    //slideshow
    return (
    <main>
        <Slideshow images={pictures} />
        <div className='info-logement'>
            <div className='text-logement'>
                <h1 className='nom-logement'>{title}</h1>
                <h2 className='emplacement-logement'>{location}</h2>
                <ul className='liste-tag-logement'>
                    {tags.map ((tag) => (
                        <li className='tag-logement'key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div>
                <figure className='info-hote'>
                    <img className='photo-hote' src={host.picture} alt={host.name}></img>
                    <figcaption className='nom-hote'>{host.name}</figcaption>
                </figure>
                <div className='rating-logement'>{ratingStars()}</div>
            </div>
        </div>
        <div className='collapse-container-logement'>
            <Collapse title='Description' text={description} customClasses='collapse-logement' />
            <Collapse title='Équipements' text={listeEquipements()} customClasses='collapse-logement' />
        </div>
    </main>
    );
};