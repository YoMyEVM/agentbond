import React from "react";

interface BuyPreOrderWithTokenProps {
  token: {
    symbol: string;
    name: string;
    image: string;
    color: string;
    gposale: string;
  };
  price: number | string;  // Price can now be a number or a string ("Price unavailable")
  sold: number;
  totalunits: number;
  currentprice: string; // Add currentprice to props
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({
  token,
  price,
  sold,
  totalunits,
  currentprice,  // Access currentprice from props
}) => {
  const priceFormatted = typeof price === "number" ? price.toFixed(2) : price;
  const progress = totalunits ? sold / totalunits : 0;  // Calculate progress as a fraction

  const priceText = priceFormatted !== "Price unavailable" ? `$${priceFormatted}` : "Price unavailable";

  // Determine button text based on price availability
  const buttonText = priceFormatted !== "Price unavailable" ? "Pre-Order" : "Coming Soon";

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <p className="text-lg text-center mb-5 text-white">Pre-order with {token.symbol}</p>
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-1" />

      {/* Price display */}
      <p className="text-2xl mt-4 font-semibold">{priceText}</p>

      {/* Current price display */}
      <p className="text-sm mt-3">
        <span className="text-accent2">Current Price</span>
        <br />
        <span className="text-white">
          {`${currentprice} `}
          <span style={{ color: token.color }}>
            {token.symbol}
          </span>
        </span>
      </p>

      {/* Pre-order button */}
      <button className="px-2 py-1 mt-5 bg-black text-accent1 border-2 border-accent2 rounded hover:bg-[#333]">
        {buttonText}
      </button>

      {/* Progress bar */}
      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">
              {sold}/{totalunits}
            </span>
          </div>
          <div className="flex mb-0 items-center justify-between w-full">
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
