import React  from "react";

interface WelcomeModalProps {
  onClose: () => void; // Function to close the modal
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome!</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our website! I am Rosario Kalavina, Executive Director of
          Future For All In Development (FAID), registered in 2021. Since then,
          we have made significant strides in advancing our mission and engaging
          communities. Despite limited resources, we have achieved remarkable
          progress in our thematic areas. Our dedicated team works tirelessly to
          serve Malawian communities with integrity and commitment. I deeply
          appreciate their efforts, as well as the support from our partners and
          stakeholders. Together, we strive to improve the livelihoods of
          marginalized people, and I am grateful for your continued
          collaboration.
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
