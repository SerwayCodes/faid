"use client";
import React, { useState } from "react";
import Image from "next/image";
import faid4 from "@/../public/images/learners.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Create a mailto link for form submission
    const mailtoLink = `mailto:info@faidmalawi.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-6">Contact FAID</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* First Column: Image with Message Below */}
        <div className="flex flex-col items-center">
          <Image
            src={faid4} // Replace with your actual image path
            alt="Contact us"
            width={500}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
          <p className="justify-text p-4 text-lg font-bold text-black-600 mt-4">
            Contact FAID for any concerns or donations. Your support helps us continue our mission.
          </p>
        </div>

        {/* Second Column: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
