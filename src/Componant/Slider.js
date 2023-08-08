import React, { useState } from 'react';
import './Slider.css'; // You can style the slider using CSS

const Slider = ({Image}) => {
   
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Image.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? Image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='boxi'>
        
        <div className="image-slider">
        <button onClick={prevSlide}>&#8592;</button>
        <img className ="sliderimg"src={Image[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <button onClick={nextSlide}>&#8594;</button>
        </div>
    </div>
  );
};

export default Slider;
