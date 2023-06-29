import '../style/Slideshow.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Slideshow({ images }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const allSlides = images.length;

    const NextSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide + 1) % allSlides);
    };

    const PreviousSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide - 1 + allSlides) % allSlides);
    };

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