import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price, description }) => {
  return (
    <div className="flex w-[700px] h-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Imagen en la mitad izquierda */}
      <div className="w-1/2">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Contenido en la mitad derecha */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-xl text-green-500 font-semibold mb-2">{price}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
