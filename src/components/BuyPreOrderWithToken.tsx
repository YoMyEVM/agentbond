import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Token } from '../utils/tokens';  // Import the Token interface

interface BuyPreOrderWithTokenProps {
  token: Token;
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({ token }) => {
  const [price, setPrice] = useState<number | null>(null);
  const progress = 0.5; // Placeholder for 50% progress
  const total = 70;
  const current = Math.round(progress * total); // Calculate current progress (e.g., 35)

  interface DexscreenerResponse {
    pair: {
      priceUsd: number;
    };
  }

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get<DexscreenerResponse>(
          `https://api.dexscreener.com/latest/dex/pairs/${token.symbol.toLowerCase()}/eth`
        );
        console.log('API Response:', response.data);  // Add this line to check the response data
        const priceData = response.data.pair.priceUsd;
        setPrice(priceData);
      } catch (error) {
        console.error("Error fetching price from Dexscreener:", error);
        setPrice(null);
      }
    };
  
    fetchPrice();
  }, [token.symbol]);
  

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <img src={token.image} alt={token.name} className="w-40 h-40 mb-4" />
      <p className="text-sm text-center">{token.symbol}</p>
      <p className="text-lg font-semibold mt-1">
        ${price ? price.toFixed(2) : "N/A"}
      </p>

      <button className="mt-2 py-2 px-4 bg-[#fd01f5] text-white rounded-full hover:bg-[#ff007f]">
        Pre-order
      </button>

      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">{current}/{total}</span>
          </div>
          <div className="flex mb-4 items-center justify-between w-full">
            <div className="relative pt-1 w-full">
              <div className="flex mb-2">
                <div className="flex w-full">
                  <div
                    className="progress-bar h-2 rounded-full"
                    style={{
                      width: `${progress * 100}%`,
                      backgroundColor: progress >= 1 ? "#4caf50" : token.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPreOrderWithToken;
