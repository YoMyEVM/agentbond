import React, { useEffect, useState } from "react";

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

  // Calculate next epoch (4 days from now)
  const epochDuration = 4 * 24 * 60 * 60; // 4 days in seconds
  const now = Math.floor(Date.now() / 1000); // Current Unix time in seconds
  const nextEpoch = Math.floor(now / epochDuration) * epochDuration + epochDuration; // Next epoch start time

  const [timeLeft, setTimeLeft] = useState<number>(nextEpoch - now);

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const priceText = priceFormatted !== "Price unavailable" ? `$${priceFormatted}` : "Price unavailable";

  // Determine button text based on price availability
  const buttonText = priceFormatted !== "Price unavailable" ? "Pre-Order" : "Coming Soon";

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <p className="text-lg text-center mb-5 text-white">Pre-order with {token.symbol}</p>
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-1" />

      <p className="text-2xl mt-4 font-semibold mt-1">
        {priceText}
      </p>

{/* Display current price with the label in accent1 and the price number in white */}
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


      {/* Conditionally render button text */}
      <button className="px-2 py-1 mt-5 bg-black text-accent1 border-2 border-accent2 rounded hover:bg-[#333]">
        {buttonText}
      </button>

      {/* Rebalance in countdown */}
      <p className="text-sm text-accent1 mt-5">Rebalance in {formatTime(timeLeft)}</p>


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