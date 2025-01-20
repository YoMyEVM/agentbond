import React from 'react';

interface BuyPreOrderWithTokenProps {
  token: {
    symbol: string;
    name: string;
    image: string;
    color: string;
  };
  price: number | string;  // Price can now be a number or a string ("Price unavailable")
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({ token, price }) => {
  // Check if price is a number before calling .toFixed()
  const priceFormatted = typeof price === 'number' ? price.toFixed(2) : price;

  return (
    <div className="border p-4 rounded-lg">
      <h3 className="text-lg font-bold">{token.symbol}</h3>
      <p className="text-sm">{priceFormatted}</p>
    </div>
  );
};

export default BuyPreOrderWithToken;
