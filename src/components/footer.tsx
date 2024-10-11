import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing social media icons

export default function Footer() {
  return (
    <div className="w-full mx-auto">
      <footer className="bg-green-600 p-6 text-center text-white">
        {/* Footer content */}
        <div className="mb-4">
          <p>&copy; 2024 FAID. All Rights Reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a
            href="https://web.facebook.com/profile.php?id=61566860078721"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="Facebook Page"
          >
            <FaFacebook size={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+265999396083"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:faidmalawi.org@gmail.com"
            className="text-white hover:text-gray-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>

          {/* Phone */}
          <a
            href="tel:+265999396083"
            className="text-white hover:text-gray-300"
            aria-label="Phone"
          >
            <FaPhone size={24} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-4 text-sm">
          <p>Contact us at: faidmalawi.org@gmail.com</p>
          <p>Phone: +265 999 396 083</p>
        </div>
      </footer>
    </div>
  );
}
