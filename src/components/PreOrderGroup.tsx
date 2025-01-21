import React, { useState, useEffect } from "react";
import PreOrderCard from "./PreOrderCard";
import { chains } from "../utils/chains"; // Adjust the path to your chains array
import { ethers } from 'ethers';
import { baseTokens, optimismTokens, polygonTokens, arbitrumTokens, apeChainTokens, abstractTokens, unichainTokens, beraChainTokens } from '../utils/tokens';

// Define token type with 'name' and 'gposale' properties
interface Token {
  name: string;
  symbol: string;
  dexpool: string;
  gposale: string;
}

const PreOrderGroup: React.FC = () => {
  const [progressData, setProgressData] = useState<any[]>([]);

  // Function to fetch tokens for the chain
  const getTokensForChain = (chainName: string): Token[] => {
    switch (chainName) {
      case "Base": return baseTokens;
      case "Optimism": return optimismTokens;
      case "Polygon": return polygonTokens;
      case "Arbitrum": return arbitrumTokens;
      case "ApeChain": return apeChainTokens;
      case "Abstract": return abstractTokens;
      case "Unichain": return unichainTokens;
      case "BeraChain": return beraChainTokens;
      default: return [];
    }
  };

  const fetchProgressData = async () => {
    const progress = chains.map(async (chain) => {
      const provider = new ethers.JsonRpcProvider(chain.rpc);
      const tokens = getTokensForChain(chain.name); // Fetch tokens for the chain

      const tokenProgress = await Promise.all(
        tokens.map(async (token: Token) => { // Use Token type
          const contract = new ethers.Contract(token.gposale, [
            "function totalSupply() public view returns (uint256)"
          ], provider);

          try {
            const totalSupply = await contract.totalSupply();
            const formattedTotalSupply = ethers.formatUnits(totalSupply, 18); // Adjust decimals if needed
            return parseFloat(formattedTotalSupply);
          } catch (error) {
            console.error(`Error fetching data for ${token.name}:`, error);
            return 0;
          }
        })
      );

      const totalSold = tokenProgress.reduce((sum: number, progress: number) => sum + progress, 0);

      return {
        id: chain.id,
        sold: totalSold,
        totalunits: 450, // Total possible units
        name: chain.name,
        image: chain.image,
        color: chain.color,
      };
    });

    const allProgressData = await Promise.all(progress);
    setProgressData(allProgressData);
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-0 bg-black min-h-screen">
      {/* Render PreOrderCards with progress data */}
      {progressData.map((chainProgress) => (
        <PreOrderCard key={chainProgress.id} chain={chainProgress} />
      ))}
    </div>
  );
};

export default PreOrderGroup;
