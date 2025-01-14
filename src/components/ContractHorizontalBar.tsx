import React, { useState } from "react";
import { contracts, Contract } from "../utils/contracts"; // Adjust the import path as needed

const ContractHorizontalBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxItemsPerView = 8;

  const nextContracts = () => {
    if (currentIndex + maxItemsPerView < contracts.length) {
      setCurrentIndex(currentIndex + maxItemsPerView);
    }
  };

  const prevContracts = () => {
    if (currentIndex - maxItemsPerView >= 0) {
      setCurrentIndex(currentIndex - maxItemsPerView);
    }
  };

  const displayedContracts = contracts.slice(currentIndex, currentIndex + maxItemsPerView);

  return (
    <div className="py-0">
      <div className="flex items-center justify-between px-4 mt-2">
        <button
          onClick={prevContracts}
          disabled={currentIndex === 0}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50"
        >
          &#8592;
        </button>

        <div className="flex gap-1 overflow-hidden">
          {displayedContracts.map((contract: Contract) => (
            <div
              key={contract.id}
              className="flex flex-row items-center justify-center text-center bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg"
              style={{ minWidth: "100px" }}
            >
              <span className="text-white font-bold text-sm">{contract.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={nextContracts}
          disabled={currentIndex + maxItemsPerView >= contracts.length}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ContractHorizontalBar;
