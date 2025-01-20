import React from "react";

interface BuyPreOrderWithTokenProps {
  token: {
    symbol: string;
    name: string;
    image: string;
    color: string;
  };
  price: number | string;  // Price can now be a number or a string ("Price unavailable")
  current: number;
  total: number;
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({
  token,
  price,
  current,
  total,
}) => {
  const priceFormatted = typeof price === "number" ? price.toFixed(2) : price;
  const progress = total ? current / total : 0;  // Calculate progress as a fraction

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-4" />
      <p className="text-sm text-center">{token.symbol}</p>
      <p className="text-lg font-semibold mt-1">
        {priceFormatted !== "Price unavailable" ? `$${priceFormatted}` : "Price unavailable"}
      </p>

      <button className="mt-2 py-2 px-4 bg-[#fd01f5] text-white rounded-full hover:bg-[#ff007f]">
        Pre-order
      </button>

      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">
              {current}/{total}
            </span>
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
