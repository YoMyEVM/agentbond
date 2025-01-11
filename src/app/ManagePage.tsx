// EquipPage.tsx
import React, { useState } from "react";

const ManagePage: React.FC = () => {
  // State to track the selected option (ISAI AGENT or BYO-NFT)
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle card selection
  const handleCardSelection = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">
        Manage your Smart NFT Brain
      </h1>
      <p className="text-3xl text-gray-300 mt-4">
        Turn any NFT into a Smart NFT by Equipping an ISAI Brain
      </p>

      {/* Toggleable cards */}
      <div className="flex justify-center space-x-8 mt-8">
        <div
          onClick={() => handleCardSelection("ISAI AGENT")}
          className={`cursor-pointer p-6 bg-gray-800 rounded-lg shadow-lg w-1/3 ${
            selectedOption === "ISAI AGENT" ? "bg-[#fd01f5] text-white" : "text-gray-300"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">ISAI AGENT</h2>
          <p>Select this option to equip an ISAI Agent to your NFT.</p>
        </div>

        <div
          onClick={() => handleCardSelection("BYO-NFT")}
          className={`cursor-pointer p-6 bg-gray-800 rounded-lg shadow-lg w-1/3 ${
            selectedOption === "BYO-NFT" ? "bg-[#fd01f5] text-white" : "text-gray-300"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">BYO-NFT</h2>
          <p>Select this option to equip your own NFT with an ISAI Brain.</p>
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

export default ManagePage;
