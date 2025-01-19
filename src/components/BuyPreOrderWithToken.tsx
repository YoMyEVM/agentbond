// BuyPreOrderWithToken.tsx
import React from 'react';
import { Token } from '../utils/tokens'; // Import the Token type from tokens.ts

interface BuyPreOrderWithTokenProps {
  token: Token; // Define the 'token' prop type
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({ token }) => {
  const progress = 0.5; // Placeholder for 50% progress
  const total = 70;
  const current = Math.round(progress * total); // Calculate current progress (e.g., 35)

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      {/* Centering the logo */}
      <img src={token.image} alt={token.name} className="w-40 h-40 mb-4" />

      <p className="text-sm text-center">{token.symbol}</p>
      <button className="mt-2 py-2 px-4 bg-[#fd01f5] text-white rounded-full hover:bg-[#ff007f]">
        Pre-order
      </button>

      {/* Progress bar section */}
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
                      backgroundColor: progress >= 1 ? '#4caf50' : token.color, // Use token's color for progress bar
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
