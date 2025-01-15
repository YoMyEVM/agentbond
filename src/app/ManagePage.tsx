// EquipPage.tsx
import React, { useState } from "react";

const ManagePage: React.FC = () => {
  // State to track the selected option (ISAI AGENT or YourNFT)
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle card selection
  const handleCardSelection = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">
        Manage your Agent Core Brain
      </h1>
      <p className="text-3xl text-accent1 mt-4">
        Turn any NFT into a Smart NFT by Equipping an ISAI Core Brain
      </p>

      {/* Toggleable buttons */}
      <div className="flex justify-center space-x-8 mt-8">
        <button
          onClick={() => handleCardSelection("ISAI AGENT")}
          className={`transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none px-8 py-4 rounded-full shadow-lg font-bold text-lg ${
            selectedOption === "ISAI AGENT"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          ISAI Agent Cores
        </button>

        <button
          onClick={() => handleCardSelection("YourNFT")}
          className={`transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none px-8 py-4 rounded-full shadow-lg font-bold text-lg ${
            selectedOption === "YourNFT"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Your Wallet NFTs
        </button>
      </div>

      {/* Form or additional options based on selected option */}
      {selectedOption && (
        <div className="bg-gray-900 p-8 rounded shadow-lg mt-8">
          <h3 className="text-xl text-white mb-6">
            You selected: {selectedOption}
          </h3>
          <p className="text-gray-400 text-center">Choose an Owned NFT</p>
        </div>
      )}
    </section>
  );
};

export default ManagePage;
