import { useState } from 'react'; //Hook d'etat

import '../style/Collapse.css'; // import de css pour collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import de fontawesome
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'; //import de chevron

export default function Collapse({ title, text, customClasses}) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${customClasses}`}>
            <div className={`collapse-container ${customClasses}`}>
            <button className={`collapse-header ${customClasses}`} onClick={toggleCollapse}>
                <h3 className={`collapse-title ${customClasses}`}>{title}</h3>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`collapse-icon ${isOpen ?'':'is-open'}`}
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