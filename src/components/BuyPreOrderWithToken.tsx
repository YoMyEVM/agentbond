// BuyPreOrderWithToken.tsx
import React from 'react';
import { Token } from '../utils/tokens'; // Import the Token type from tokens.ts

interface BuyPreOrderWithTokenProps {
  token: Token; // Define the 'token' prop type
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({ token }) => {
  return (
    <div className="token-card flex flex-col items-center">
      <img
        src={token.image}
        alt={token.name}
        className="w-[60px] h-[60px] object-contain mb-2" // Explicit 20x20px size
      />
      <h3 className="text-sm">{token.name}</h3>
      <p className="text-xs">{token.symbol}</p>
      <button className="mt-2 px-4 py-2 bg-[#fd01f5] text-white rounded">Pre-order</button>
    </div>
  );
};

export default BuyPreOrderWithToken;
