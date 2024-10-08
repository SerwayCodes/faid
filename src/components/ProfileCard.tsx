import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: StaticImageData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  imageSrc,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-2 mb-4  w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={`${name}'s profile picture`}
        className="rounded object-cover mb-4 h-80 w-full object-top"
       
      />
      <div className="text-center">
        <h3 className="text-xl font-bold text-green-600 mb-2">{name}</h3>
        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase">
          {role}
        </p>
        <p className="text-gray-700 text-justify">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
