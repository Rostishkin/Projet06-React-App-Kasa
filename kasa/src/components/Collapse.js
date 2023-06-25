import { useState } from 'react'; //Hook d'etat

import '../style/Collapse.css'; // import de css pour collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import de fontawesome
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; //import de chevrons

export default function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <button className='collapse-header' onClick={toggleCollapse}>
                <h3 className='collapse-title'>{title}</h3>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronUp}
                    className="collapse-icon"
                />
            </button>
            {!isOpen && (
                <div className='collapse-body'>
                <p>{text}</p>
                </div>
            )}
        </div>
    );
}