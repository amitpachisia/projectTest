import React, { useState } from 'react';
import './CustomSlider.css';

const images = [
  'https://placehold.co/600x300/FFB6C1/000000?text=Slide+1',
  'https://placehold.co/600x300/87CEFA/000000?text=Slide+2',
  'https://placehold.co/600x300/90EE90/000000?text=Slide+3',
];

function CustomSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={prevSlide}>⟵</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} className="slider-image" />
      <button className="nav-button" onClick={nextSlide}>⟶</button>
    </div>
  );
}

export default CustomSlider;
