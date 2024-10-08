import React, { useState, useEffect } from "react";

interface WelcomeModalProps {
  onClose: () => void; // Function to close the modal
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome!</h2>
        <p className="text-gray-700 mb-4">
          We're glad to have you here! Explore our projects and initiatives to
          learn how we're making a difference in local communities.
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
