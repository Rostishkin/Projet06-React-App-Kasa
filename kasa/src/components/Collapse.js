import '../sass/components/Collapse.scss'; // import de css pour collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import de fontawesome
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'; //import de chevron
import { useState } from 'react'; //hook d'etat

//customClasses: permettre la personnalisation classes CSS séparés par des espaces + application aux éléments du composant Collapse

//fonction Collapse 
export default function Collapse({ title, text, customClasses}) {
    //Hook d'etat  pour initialiser une variable "isOpen" à la valeur "true". Cette variable sera utilisée pour déterminer si collapse est ouvert ou fermé.
    const [isOpen, setIsOpen] = useState(true);

    //Hook d'etat  pour initialiser une variable "iconRotation" a la valeur "0".
    const [iconRotation, setIconRotation] = useState(0);

    //fonction appelée lorsquon appuie sur le bouton --> inverse la valeur 
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setIconRotation(iconRotation === 0 ? -180 : 0);
    }
    //sortie
    return (
        <div className={`collapse ${customClasses}`}>
            <div className={`collapse-container ${customClasses}`}>
            <button className={`collapse-header ${customClasses}`} onClick={toggleCollapse}>
                    <h3 className={`collapse-title ${customClasses}`}>{title}</h3>
                    <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`collapse-icon ${isOpen ? '' : 'is-open'}`}
                    style={{ transform: `rotate(${iconRotation}deg)` }}
                     />
                    </button>
                    {!isOpen &&
                    <div className={`collapse-body ${customClasses}${isOpen ? '' : 'is-open'}`}>
                    {text}
                    </div>
                    }
            </div>
        </div>
    );
}