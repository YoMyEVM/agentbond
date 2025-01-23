import React, { useState, useEffect } from "react";
import PreOrderCard from "./PreOrderCard";
import { chains } from "../utils/chains";
import { ethers } from 'ethers';
import axios from "axios";
import {
  baseTokens,
  optimismTokens,
  polygonTokens,
  arbitrumTokens,
  apeChainTokens,
  abstractTokens,
  unichainTokens,
  beraChainTokens,
} from "../utils/tokens";

// Dexscreener response shape
interface DexscreenerResponse {
  pair: {
    priceUsd: string;
  };
}

// Define token type with 'name', 'symbol', 'dexpool', 'gposale', and optional 'currentprice'
interface Token {
  name: string;
  symbol: string;
  dexpool: string;
  gposale: string;
  currentprice?: number;  // if you store it in tokens
}

const PreOrderGroup: React.FC = () => {
  const [progressData, setProgressData] = useState<any[]>([]);

  const getTokensForChain = (chainName: string): Token[] => {
    switch (chainName) {
      case "Base":       return baseTokens;
      case "Optimism":   return optimismTokens;
      case "Polygon":    return polygonTokens;
      case "Arbitrum":   return arbitrumTokens;
      case "ApeChain":   return apeChainTokens;
      case "Abstract":   return abstractTokens;
      case "Unichain":   return unichainTokens;
      case "BeraChain":  return beraChainTokens;
      default:           return [];
    }
  };

  const fetchProgressData = async () => {
    const progress = chains.map(async (chain) => {
      const provider = new ethers.JsonRpcProvider(chain.rpc);
      const tokens = getTokensForChain(chain.name);

      let totalSold = 0;
      let bestPrice = 0; // We'll calculate it below
      const prices: number[] = [];

      // For each token, fetch total supply + DexScreener price
      for (const token of tokens) {
        // 1) totalSupply
        let soldAmount = 0;
        try {
          const contract = new ethers.Contract(
            token.gposale,
            ["function totalSupply() public view returns (uint256)"],
            provider
          );
          const totalSupply = await contract.totalSupply();
          soldAmount = parseFloat(ethers.formatUnits(totalSupply, 18));
        } catch (error) {
          console.error(`Error fetching totalSupply for ${token.name}:`, error);
        }
        totalSold += soldAmount;

        // 2) DexScreener Price
        let dexPriceUsd = 0;
        try {
          const res = await axios.get<DexscreenerResponse>(
            `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
          );
          dexPriceUsd = parseFloat(res.data?.pair?.priceUsd || "0");
        } catch (error) {
          console.error(`Error fetching Dex price for ${token.symbol}:`, error);
        }

        // Multiply if your "best price" needs token.currentprice
        // For example: finalPrice = DexScreener price * currentPriceOfGPO
        const currentprice = token.currentprice || 1; // fallback if undefined
        const finalPrice = dexPriceUsd * currentprice;

        // Store for picking min
        if (finalPrice > 0) {
          prices.push(finalPrice);
        }
      }

      // compute chain's bestPrice (lowest found)
      if (prices.length) {
        bestPrice = Math.min(...prices);
      }

      return {
        id: chain.id,
        name: chain.name,
        image: chain.image,
        color: chain.color,
        sold: totalSold,
        totalunits: 500, // or your logic
        bestPrice,
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
      {progressData.map((chainProgress) => (
        <PreOrderCard key={chainProgress.id} chain={chainProgress} />
      ))}
    </div>
  );
};

export default PreOrderGroup;
