import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

// Define the props interface
interface CardProps {
  imageSrc: StaticImageData; // Type for the image source
  title: string; // Type for the title
  description: string; // Type for the description
}

// Reusable card component
const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 flex-grow">
      <Image src={imageSrc} alt={title} className="w-full h-58 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
