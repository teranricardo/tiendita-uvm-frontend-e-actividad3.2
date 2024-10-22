// Realizado por Ricardo Terán

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-greenLight font-rabbits text-white py-2 px-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        {/* Enlace al inicio con el logo y el nombre de la tienda */}
        <NavLink
          to="/"
          className="flex items-center hover:text-redAccent"
        >
          <img src="/images/logo.png" alt="Logo La Tiendita UVM" className="w-16 h-14 mr-2" />
          <h1 className="text-2xl font-bold">La Tiendita UVM</h1>
        </NavLink>
      </div>
      <nav>
        <ul className="flex space-x-6 font-poppins text-lg">
          {/* Enlace a la página de productos */}
          <li>
            <NavLink
              to="/productos"
              className="hover:text-redAccent"
            >
              Productos
            </NavLink>
          </li>
          {/* Enlace a la página de contacto */}
          <li>
            <NavLink
              to="/contacto"
              className="hover:text-redAccent"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}