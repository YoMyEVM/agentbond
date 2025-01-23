import React, { useState } from "react";

interface BuyPreOrderWithTokenProps {
  token: {
    symbol: string;
    name: string;
    image: string;
    color: string;
    gposale: string;
    address: string;       // <-- from your tokens.ts interface
  };
  usdPrice: number;        // final USD cost (e.g. "30")
  tokenQuantity: number;   // e.g. "20" for 20 OP
  sold: number;
  totalunits: number;
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({
  token,
  usdPrice,
  tokenQuantity,
  sold,
  totalunits,
}) => {
  // For click-to-copy UI feedback
  const [copied, setCopied] = useState(false);

  // Format token address to short form: 0x1234...abcd
  const shortAddress = token.address
    ? `${token.address.slice(0, 6)}...${token.address.slice(-4)}`
    : "";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(token.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  // Format USD cost to 4 decimals
  const usdText =
    usdPrice && usdPrice > 0 ? `$${usdPrice.toFixed(4)}` : "Coming Soon";

  // Format on-chain token cost (4 decimals)
  const costInTokens =
    tokenQuantity && tokenQuantity > 0
      ? `${tokenQuantity.toFixed(4)} ${token.symbol}`
      : "No cost data";

  // Progress fraction
  const progress = totalunits ? sold / totalunits : 0;

  // Button text
  const buttonText = tokenQuantity > 0 ? "Pre-Order" : "Coming Soon";

  return (
    <div className="token-card border-4 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <p className="text-lg text-center mb-5 text-accent2">
        Pre-order with {token.symbol}
      </p>

      {/* Token logo */}
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-1" />

      {/* Short token address (copyable) */}
      <div className="text-xs text-gray-400 mt-1 cursor-pointer">
        <span onClick={handleCopyAddress} className="underline hover:text-white">
          {shortAddress}
        </span>
        {copied && <span className="ml-2 text-green-400">Copied!</span>}
      </div>

      {/* Display USD price */}
      <p className="text-2xl mt-4 font-semibold">{usdText}</p>

      {/* Display on-chain token cost */}
      <p className="text-sm mt-3">
        <span className="text-accent2">Current Price</span>
        <br />
        <span className="text-white">{costInTokens}</span>
      </p>

      {/* Pre-order button */}
      <button
        className="px-2 py-1 mt-5 bg-black text-accent1 border-2 border-accent2 rounded hover:bg-[#333]"
        disabled={tokenQuantity <= 0}
      >
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
                      width: `${(progress * 100).toFixed(2)}%`,
                      backgroundColor:
                        progress >= 1 ? "#4caf50" : token.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* end progress bar */}
    </div>
  );
};

export default BuyPreOrderWithToken;
