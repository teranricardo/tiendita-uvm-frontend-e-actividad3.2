// Realizado por Ricardo Terán

import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Arreglo de imágenes
const images = [
  'images/image1.png',
  'images/image2.png',
  'images/image3_.png',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Función para ir a la imagen siguiente
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Función para seleccionar un slide específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" relative w-full h-56 md:h-96 overflow-hidden ">
      {/* Imágenes del carrusel */}
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-screen h-screen object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <IoIosArrowDropleftCircle className='w-12 h-12 text-grayLight'/>
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <IoIosArrowDroprightCircle className='w-12 h-12 text-grayLight'/>
      </button>
    </div>
  );
};