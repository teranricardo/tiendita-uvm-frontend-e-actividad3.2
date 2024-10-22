// Realizado por Leandro Valera

import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../products';

export default function Products() {
  const navigate = useNavigate();

  // Función que maneja la navegación a la página de detalles del producto
  const handleViewDetails = (product) => {
    navigate(`/productos/${product.id}`, { state: product });
  };

  return (
    <div className="font-rabbits">
      <main className="py-12 bg-grayLight">
        <h2 className="text-4xl text-center font-poppins font-bold mb-8">Nuestros Productos</h2>

        {products.map((category, idx) => (
          <section key={idx} className="mb-12 px-4">
            {/* Título de la categoría de productos */}
            <h3 className="text-3xl text-greenDark font-bold mb-4 text-center">{category.category}</h3>
            {/* Descripción de la categoría */}
            <p className="text-lg text-center text-gray-700 mb-4">{category.description}</p>
            <div className="flex flex-wrap justify-center gap-8">
              {category.items.map((product) => (
                <div key={product.id} className="w-auto h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
                  {/* Imagen del producto */}
                  <img src={product.image} alt={product.name} className="w-64 h-64 object-contain transform transition duration-300 ease-in-out hover:scale-110" />
                  <div className="w-full p-4">
                    <h4 className="text-xl font-bold text-black mb-2">{product.name}</h4>
                    <p className="text-xl text-greenDark font-bold">{product.price}</p>
                    {/* Botón para ver detalles del producto */}
                    <button
                      className="mt-4 bg-redAccent text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
                      onClick={() => handleViewDetails(product)}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}