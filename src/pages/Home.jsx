// Realizado por Ricardo Terán

import React from 'react';
import { NavLink } from 'react-router-dom';
import Category from '../components/Category';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className="font-rabbits">
      {/* Sección Hero: Presentación inicial con un carrusel de imágenes */}
      <section className="pb-6 bg-white text-black flex flex-col justify-center items-center text-center">
        <Carousel />

        <div className='pb-8 pt-8'>
          <h2 className="mt-6 text-4xl font-bold mb-4">Bienvenido a La Tiendita UVM</h2>
          <p className="text-xl mb-8">Tu tienda de productos personalizados en la Universidad Valle del Momboy</p>

          {/* Botón para navegar a la página de productos */}
          <button className="font-poppins bg-redAccent text-white text-center text-2xl py-2 px-4 rounded-lg font-poppins hover:bg-black transition duration-300">
            <NavLink
              to="/productos"
            >
              Ver productos
            </NavLink>
          </button>
        </div>
      </section>

      {/* Sección de Categorías: Muestra las categorías de productos disponibles */}
      <section id="categorias" className="py-12 bg-greenDark text-black">
        <h3 className="text-white text-3xl text-center mb-8 font-poppins font-bold">Categorías Principales</h3>
        <div className="flex flex-wrap justify-center space-x-8">
          <Category text="Ropa Personalizada" />
          <Category text="Accesorios Personalizados" />
          <Category text="Papelería Creativa" />
          <Category text="Regalos Personalizados" />
          <Category text="Decoración y Organización de Eventos" />
        </div>
      </section>

      {/* Sección de Misión y Visión: Información sobre la misión y visión de la tienda */}
      <section id="mision" className="py-12 bg-grayLight flex justify-center items-start">
        <div className="w-1/3 px-16 text-center">
          <h3 className="text-3xl text-black mb-6 font-poppins font-bold">Nuestra Misión</h3>
          <p className="text-lg mb-6">
            Satisfacer las necesidades de nuestros clientes, brindando soluciones creativas que resalten la identidad de cada marca.
          </p>
        </div>

        <div className="w-1/3 px-16 text-center">
          <h3 className="text-3xl text-black mb-6 font-poppins font-bold">Nuestra Visión</h3>
          <p className="text-lg">
            Ser la referencia indiscutible en el mercado de elaboración y producción de material POP, reconocido por nuestra excelencia.
          </p>
        </div>
      </section>
    </div>
  );
};