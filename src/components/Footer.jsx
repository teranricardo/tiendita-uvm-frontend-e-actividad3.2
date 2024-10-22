// Realizado por Ricardo Terán

import React from 'react';
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-greenLight text-dark text-center text-lg font-poppins">
      <div className='py-2'>
        {/* Información de contacto */}
        <p>
          Correo:
          <a href="mailto:tiendauvm@uvm.edu.ve" className="hover:text-redAccent"> tiendauvm@uvm.edu.ve</a> |
          Tel: +58 412 198 8407
        </p>
        {/* Enlace a Instagram */}
        <p>
          Síguenos en Instagram:
          <a href="https://www.instagram.com/latienditauvm" className="hover:text-redAccent">
            <FaInstagram className="inline-block w-5 h-5 ml-2" /> @latienditauvm
          </a>
        </p>
      </div>
      {/* Información de derechos de autor */}
      <p className='bg-greenDark text-white py-1 text-sm'>© TODOS LOS DERECHOS RESERVADOS – UNIVERSIDAD VALLE DEL MOMBOY | 1997 – 2024</p>
    </footer>
  );
}