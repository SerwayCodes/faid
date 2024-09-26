import React from "react";
import Image from "next/image";

// Reusable card component
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/4 m-4">
      <Image src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
