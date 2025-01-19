// BuyPreOrderWithToken.tsx
import React from 'react';
import { Token } from '../utils/tokens'; // Import the Token type from tokens.ts

interface BuyPreOrderWithTokenProps {
  token: Token; // Define the 'token' prop type
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({ token }) => {
  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      {/* Centering the logo */}
      <img src={token.image} alt={token.name} className="w-40 h-40 mb-4" />
      <h3 className="text-lg font-semibold text-center">{token.name}</h3>
      <p className="text-sm text-center">{token.symbol}</p>
      <button className="mt-2 py-2 px-4 bg-[#fd01f5] text-white rounded-full hover:bg-[#ff007f]">
        Pre-order
      </button>
    </div>
  );
};

export default BuyPreOrderWithToken;
