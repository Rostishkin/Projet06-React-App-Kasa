import '../sass/components/Slideshow.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

//fonction slideshow avec tableau d'images en parametre
export default function Slideshow({ images }) {

    //currentSlide = photo actuelle
    //allSlides = nombre total des photos
    const [currentSlide, setCurrentSlide] = useState(0);
    const allSlides = images.length;

    //fonction next 
    // % pour revenir à la premiere photo après la derniere
    const NextSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide + 1) % allSlides);
    };

     //precedent slide
     // % aller à la dernière photo après la premiere
    const PreviousSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide - 1 + allSlides) % allSlides);
    };

    //sortie
    //allSlides > 1 == affichage
    //si plus d'une image le nombre sur le total s'affiche / sinon rien 
    // la meme chose pour les chevrons
    return (
        <div className="slideshow">
            {allSlides > 1 && (
                <FontAwesomeIcon icon={faChevronLeft} onClick={PreviousSlide} className='slideshow--previous-slide slideshow-navigation' />
            )}

            <div className="slideshow-images">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="slideshow-active-img"
                />
            </div>

            {allSlides > 1 && (
                <div className="slideshow-number">
                    {`${currentSlide + 1}/${allSlides}`}
                </div>
            )}

            {allSlides > 1 && (
                <FontAwesomeIcon icon={faChevronRight} onClick={NextSlide} className='slideshow--next-slide slideshow-navigation' />
            )}
        </div>
      );
      
}