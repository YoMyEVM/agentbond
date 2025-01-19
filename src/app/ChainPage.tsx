import React from "react";
import { useParams } from "react-router-dom";
import { chains } from "../utils/chains"; // Assuming you have a chains array
import ChainDetail from "../components/ChainDetail"; // A component to display chain details
import BuyPreOrderWithToken from "../components/BuyPreOrderWithToken"; // Import the BuyPreOrderWithToken component
import { baseTokens, optimismTokens, polygonTokens, arbitrumTokens, apeChainTokens, abstractTokens, unichainTokens, beraChainTokens } from '../utils/tokens';

const ChainPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL params

  // Ensure the ID is a valid number
  const chainId = id ? Number(id) : NaN;

  // Find the chain by ID from the chains list
  const chain = !isNaN(chainId) ? chains.find((chain) => chain.id === chainId) : undefined;

  // If chain is not found, return a 404-style message
  if (!chain) {
    return (
      <div className="p-6 bg-[#000] text-white">
        <p>Chain not found!</p>
      </div>
    );
  }

  // Helper function to determine which tokens to display based on the chain
  const getTokensForChain = (chainName: string) => {
    switch (chainName) {
      case "Base":
        return baseTokens;
      case "Optimism":
        return optimismTokens;
      case "Polygon":
        return polygonTokens;
      case "Arbitrum":
        return arbitrumTokens;
      case "ApeChain":
        return apeChainTokens;
      case "Abstract":
        return abstractTokens;
      case "Unichain":
        return unichainTokens;
      case "BeraChain":
        return beraChainTokens;
      default:
        return [];
    }
  };

  // Get the tokens for the current chain
  const tokens = getTokensForChain(chain.name);

  return (
    <div className="p-6 bg-[#000] text-white text-center">
      {/* Display the ChainDetail component */}
      <ChainDetail chain={chain} />

      {/* Render token cards for the selected chain */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tokens.map((token) => (
          <BuyPreOrderWithToken key={token.name} token={token} />
        ))}
      </div>
    </div>
  );
};

export default ChainPage;
