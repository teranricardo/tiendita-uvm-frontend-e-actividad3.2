// Realizado por Ricardo Terán

import React from 'react'

export default function Category({ text }) {
  return (
    <div className="w-1/4 p-4 m-4 bg-white rounded-lg text-center hover:bg-greenLight transition duration-300">
      <h4 className="text-xl font-bold">{text}</h4>
    </div>
  )
}
