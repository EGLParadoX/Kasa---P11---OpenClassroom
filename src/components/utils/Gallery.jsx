import { useState } from "react";
import PropTypes from "prop-types";

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

  if (pictures.length <= 1) {
    return (
      <div className="slider">
        <div className="slide-container">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index + 1}`}
              className={index === currentSlide ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slider">
      <div className="slide-container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slide-counter">{slideCounter}</div>
    </div>
  );
};

Gallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Gallery;
