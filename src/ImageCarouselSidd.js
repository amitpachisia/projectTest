import { useState } from 'react';
import './ImageCarouselSidd.css';

const ImageCarouselSidd = () => {
  const images = [
    "https://promos.makemytrip.com/images/TajExoticaResortSpaGoa_150125.webp",
    "https://promos.makemytrip.com/images/TajFortAguadaResortSpaGoa_150125.webp",
    "https://promos.makemytrip.com/images/CidadeDeGoaIHCLSeleQtions_150125.webp",
  ];

  const [current, setCurrent] = useState(0);

  const showNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`carousel-img ${index === current ? 'active' : ''}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className="btn prev" onClick={showPrev}>
        &#10094;
      </button>
      <button className="btn next" onClick={showNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarouselSidd;
