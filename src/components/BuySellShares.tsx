import React from "react";

interface BuySellSharesProps {
  onBuy: () => void;
  onSell: () => void;
}

const BuySellShares: React.FC<BuySellSharesProps> = ({ onBuy, onSell }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white relative">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">Buy & Sell Shares</h2>

      {/* Main Content */}
      <div className="text-gray-400 mb-12">
        <p>Choose to buy or sell shares of this agent in the marketplace.</p>
      </div>

      {/* Buttons at the Bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-1/2 mr-2"
          onClick={onBuy}
        >
          Buy
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-1/2 ml-2"
          onClick={onSell}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default BuySellShares;
