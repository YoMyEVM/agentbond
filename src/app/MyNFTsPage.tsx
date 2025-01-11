// EquipPage.tsx
import React, { useState } from "react";

const MyNFTsPage: React.FC = () => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle card selection
  const handleCardSelection = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">
        My NFTs
      </h1>
      <p className="text-3xl text-gray-300 mt-4">
        Manage Your NFTs
      </p>

      {/* Toggleable cards */}
      <div className="flex justify-center space-x-8 mt-8">
        <div
          onClick={() => handleCardSelection("Smart-NFTs")}
          className={`cursor-pointer p-6 bg-gray-800 rounded-lg shadow-lg w-1/3 ${
            selectedOption === "SmartNFTs" ? "bg-[#fd01f5] text-white" : "text-gray-300"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Smart NFTs</h2>
          <p>Select to Manage your Smart NFTs.</p>
        </div>

        <div
          onClick={() => handleCardSelection("All-NFTs")}
          className={`cursor-pointer p-6 bg-gray-800 rounded-lg shadow-lg w-1/3 ${
            selectedOption === "All NFTs" ? "bg-[#fd01f5] text-white" : "text-gray-300"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">All NFTs</h2>
          <p>Select to to View all your NFTs.</p>
        </div>
      </div>

      {/* Form or additional options based on selected option */}
      {selectedOption && (
        <div className="bg-gray-900 p-8 rounded shadow-lg mt-8">
          <h3 className="text-xl text-white mb-6">
            You selected: {selectedOption}
          </h3>
          <p className="text-gray-400 text-center">
            Choose an Owned NFT
          </p>
        </div>
      )}
    </section>
  );
};

export default MyNFTsPage;
