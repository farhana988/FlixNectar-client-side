// import React from 'react';

import { useEffect, useState } from "react";
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
  
 
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide(prevSlide => (prevSlide % 4) + 1);
      }, 3000); 
  
      return () => clearInterval(interval); 
    }, []);
    return (
        <div className="carousel w-full pt-20 bg-green-50">
        <div
          id="slide1"
          className={`carousel-item relative w-full transition-all duration-700 ${currentSlide === 1 ? 'block' : 'hidden'}`}
        >
          <img src={slide1} className="w-full h-60 md:h-96 lg:h-[550px]" />
          
        </div>
        <div
          id="slide2"
          className={`carousel-item relative w-full transition-all duration-700 ${currentSlide === 2 ? 'block' : 'hidden'}`}
        >
          <img src={slide2} className="w-full h-60 md:h-96 lg:h-[550px]" />
         
        </div>
        <div
          id="slide3"
          className={`carousel-item relative w-full transition-all duration-700 ${currentSlide === 3 ? 'block' : 'hidden'}`}
        >
          <img src={slide3} className="w-full h-60 md:h-96 lg:h-[550px]" />
          
        </div>
        <div
          id="slide4"
          className={`carousel-item relative w-full transition-all duration-700 ${currentSlide === 4 ? 'block' : 'hidden'}`}
        >
          <img src={slide4} className="w-full h-60 md:h-96 lg:h-[550px]" />
          
        </div>
      </div>
    );
};

export default Banner;