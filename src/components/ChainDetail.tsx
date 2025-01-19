import React from "react";

interface ChainDetailProps {
  chain: {
    name: string;
    image?: string;
    color: string;
    id: number; // Change from string to number to match your data
  };
}

const ChainDetail: React.FC<ChainDetailProps> = ({ chain }) => {
  return (
    <div className="max-w-lg mx-auto bg-black p-6 rounded-lg shadow-lg text-center">
      {/* Centered Logo and Chain Name */}
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={chain.image || "/defaultLogo.png"}
          alt={`${chain.name} logo`}
          className="w-40 h-40 object-cover rounded-full mb-4" // Updated logo size
        />
        <h2 className="text-2xl font-semibold text-white">{chain.name}</h2>
      </div>
    </div>
  );
};

export default ChainDetail;
