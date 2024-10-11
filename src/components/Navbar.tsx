"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      label: "Home",
    },
    {
      id: 2,
      link: "/about",
      label: "About Us",
    },
    {
      id: 3,
      link: "/contact",
      label: "Contact",
    },
    {
      id: 4,
      link: "/updates",
      label: "Updates",
    },
  ];

  return (
    <div className="p-3 mx-auto bg-green-600">
      <div className="flex justify-between items-center w-full h-20 px-2 text-white">
        <div className="flex items-center">
          {/* Image logo from public/images/icon.png */}
          <Image
            src="/images/icon.PNG" // Path to your image in the public folder
            alt="Logo"
            width={70} // Set the desired width
            height={70} // Set the desired height
            className="rounded"
          />
        </div>
        {/* Full Text for larger screens */}
        <div className="hidden md:block ml-2">
          <h1 className="text-2xl font-bold">FAID</h1>
        </div>

        {/* Short Text for smaller screens */}
        <div className="md:hidden ml-2">
          <h1 className="text-2xl font-bold">FAID</h1>
          <p className="text-xs">
            Working towards food security, self-reliance, and improved
            livelihoods
          </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-gray-900 duration-200"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu (sliding from the left) */}
        <div
          className={`fixed bg-gradient-to-r from-purple-500 to-pink-500 top-0 left-0 w-full h-screen  text-white-500 flex flex-col justify-center items-center transition-transform duration-500 ease-out transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(false)} href={link}>
                {label}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
