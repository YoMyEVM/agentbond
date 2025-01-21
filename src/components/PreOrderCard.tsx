import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead

interface PreOrderCardProps {
  chain: {
    name: string;
    image?: string;
    color: string;
    id: string;
  };
}

const PreOrderCard: React.FC<PreOrderCardProps> = ({ chain }) => {
  const navigate = useNavigate();  // Hook to navigate
  const defaultImage = "/defaultLogo.png";
  const imageSrc = chain.image || defaultImage;

  const handlePreOrderClick = () => {
    navigate(`/chain/${chain.id}`);  // Navigate to the chain page
  };

  return (
    <div className="max-w-sm w-full bg-gray-900 shadow-md rounded-lg p-4 m-2 mb-2 border-2 border-[#fd01f5]">
      <div className="h-16 w-16 mx-auto mb-4">
        <img src={imageSrc} alt={`${chain.name} logo`} className="h-full w-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {chain.name}
        </h3>
        <p className="text-gray-400 mb-4">Best Price ~$0.00</p>
        <button
          className="text-black py-2 px-4 rounded-lg hover:opacity-80 focus:outline-none"
          style={{ backgroundColor: chain.color }}
          onClick={handlePreOrderClick}
        >
          Pre-Order Now
        </button>
      </div>
    </div>
  );
};

export default PreOrderCard;
