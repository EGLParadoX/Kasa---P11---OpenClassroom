import { useState } from "react";
import PropTypes from 'prop-types';

const Gallery = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const slideCounter = `${currentSlide + 1}/${pictures.length}`;

  return (
    <div className="slider">
      {pictures.map((picture, index) => (
        <div key={index} className="slide-container">
          <img
            src={picture}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
          />
          {index === 0 && <div className="slide-counter">{slideCounter}</div>}
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

Gallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Gallery;
