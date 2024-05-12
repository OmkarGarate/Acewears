import React, { useState, useEffect, useRef } from 'react';
import img1 from '../Images/mensCategorySlider.png';
import img2 from '../Images/mensCategorySlider1.png';
import img3 from '../Images/mensCategorySlider2.png';
import '../css/slider.css';

const images = [img1, img2, img3];

function AceWearSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
  }, [currentSlide]);

  return (
    <div className="AceWearSlider">
      <div className="aceWearWindow">
        <div className="aceWearImgs" ref={sliderRef}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AceWearSlider;