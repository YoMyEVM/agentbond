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
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({
  token,
  price,
  sold,
  totalunits,
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

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-4" />
      <p className="text-lg text-center text-accent2">Pre-order with {token.symbol}</p>

      <p className="text-2xl mt-4 font-semibold mt-1">
        {priceText}
      </p>

      {/* Rebalance in countdown */}
      <p className="text-sm text-accent1 mt-2">Rebalance in {formatTime(timeLeft)}</p>

      {/* Button Styled Like the GenCredits Button */}
      <button className="px-2 py-1 mt-5 bg-black text-accent1 border-2 border-accent2 rounded hover:bg-[#333]">
        Pre-Order
      </button>

      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">
              {sold}/{totalunits}
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
