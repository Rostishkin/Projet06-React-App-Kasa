import { useState } from 'react'; //Hook d'etat

import '../style/Collapse.css'; // import de css pour collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import de fontawesome
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; //import de chevrons

export default function Collapse({ title, text, customClasses}) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-container ${customClasses}`}>
            <div className={`collapse ${customClasses}`}>
            <button className={`collapse-header ${customClasses}`} onClick={toggleCollapse}>
                <h3 className={`collapse-title ${customClasses}`}>{title}</h3>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronUp}
                    className="collapse-icon"
                />
            </button>
            {!isOpen && (
                <div className={`collapse-body ${customClasses}`}>
                <p>{text}</p>
                </div>
            )}
            </div>
        </div>
    );
}