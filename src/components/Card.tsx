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
    <div className="bg-white shadow-xl rounded-lg  mb-4  w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
      <Image src={imageSrc} alt={title} className="rounded object-cover mb-4 h-80 w-full object-top" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
