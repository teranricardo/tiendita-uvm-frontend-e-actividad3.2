// Realizado por Leandro Valera

import React from 'react';

export default function Contact() {
  return (
    <div className="font-rabbits py-12 bg-grayLight">
      <h2 className="text-4xl text-center font-poppins font-bold mb-8">Contacto</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4">Déjanos un Mensaje</h3>
        <form>
          {/* Campo para el nombre del usuario */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Nombre</label>
            <input className="w-full border rounded-lg p-2" type="text" id="name" required />
          </div>
          {/* Campo para el correo electrónico */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Correo Electrónico</label>
            <input className="w-full border rounded-lg p-2" type="email" id="email" required />
          </div>
          {/* Campo para el mensaje */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">Mensaje</label>
            <textarea className="w-full border rounded-lg p-2" id="message" rows="4" required></textarea>
          </div>
          {/* Botón para enviar el mensaje */}
          <button className="bg-redAccent text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}