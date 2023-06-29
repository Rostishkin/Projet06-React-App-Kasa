import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../style/Slideshow.css';

export default function Slideshow({ images }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const allSlides = images.lenght;

    const NextSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide + 1) % allSlides);
    };

    const PreviousSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide - 1 + allSlides) % allSlides);
    };

    return (
        <div className="slideshow">
            {allSlides > 1 && (
                <FontAwesomeIcon icon={faChevronRight}
                 onClick={NextSlide} 
                 className="slideshow--next-slide slideshow-navigation" />
            )}

            <div className="slideshow-img">
                <img
                    className="slideshow-active-img"
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}>
                </img>
            </div>

            {allSlides > 1 && (
                <div className="slideshow-number">
                    {`${currentSlide + 1}/${allSlides}`}
                </div>
            )}

            {allSlides > 1 && (
                <FontAwesomeIcon icon={faChevronLeft}
                onClick={PreviousSlide}
                className="slideshow--previous-slide slideshow-navigation" />
            )}
        </div>
    );

}
