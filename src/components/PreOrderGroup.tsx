import React, { useState, useEffect } from "react";
import PreOrderCard from "./PreOrderCard";
import { chains } from "../utils/chains";
import { ethers } from "ethers";
import axios from "axios";

// import your GpoSale ABI
import { GpoSaleABI } from "../utils/GpoSaleABI";

// token arrays
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

interface DexscreenerResponse {
  pair: {
    priceUsd: string;
  };
}

// If your tokens have decimals as a string, do `decimals?: number | string`.
interface Token {
  name: string;
  symbol: string;
  dexpool: string;
  gposale: string;
  decimals?: number | string;
}

const PreOrderGroup: React.FC = () => {
  const [progressData, setProgressData] = useState<any[]>([]);

  // Return the relevant token list for each chain
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
    const progressPromises = chains.map(async (chain) => {
      const provider = new ethers.JsonRpcProvider(chain.rpc);
      const tokens = getTokensForChain(chain.name);

      let totalSold = 0;
      const prices: number[] = [];

      for (const token of tokens) {
        // 1) totalSupply (optional, for "sold" logic)
        try {
          const saleContract = new ethers.Contract(
            token.gposale,
            ["function totalSupply() public view returns (uint256)"],
            provider
          );
          const totalSupply = await saleContract.totalSupply();
          totalSold += parseFloat(ethers.formatUnits(totalSupply, 18));
        } catch (error) {
          console.error(`Error fetching totalSupply for ${token.name}:`, error);
        }

        // 2) Dex Price in USD
        let dexPriceUsd = 0;
        try {
          const res = await axios.get<DexscreenerResponse>(
            `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
          );
          dexPriceUsd = parseFloat(res.data?.pair?.priceUsd || "0");
        } catch (error) {
          console.error(`Error fetching Dex price for ${token.symbol}:`, error);
        }

        // 3) On-chain GPO price (pricePerToken)
        let onChainPricePerToken = 0;
        if (token.gposale && token.gposale !== "Placeholder") {
          try {
            const gpoContract = new ethers.Contract(token.gposale, GpoSaleABI, provider);
            const conditionId = await gpoContract.getActiveClaimConditionId();
            const condition = await gpoContract.getClaimConditionById(conditionId);

            // convert decimals if stored as a string
            let decimals = 18;
            if (token.decimals) {
              decimals = (typeof token.decimals === "string")
                ? parseInt(token.decimals, 10)
                : token.decimals;
            }

            // parse the price
            const rawPrice = condition.pricePerToken;
            onChainPricePerToken = parseFloat(ethers.formatUnits(rawPrice, decimals));
          } catch (err) {
            console.error(`Error fetching on-chain GPO price for ${token.name}:`, err);
          }
        }

        // 4) Final GPO price in USD = Dex price * how many tokens needed
        const finalPrice = dexPriceUsd * onChainPricePerToken;
        if (finalPrice > 0) {
          prices.push(finalPrice);
        }
      }

      // Use the lowest valid price for the chain
      const bestPrice = prices.length ? Math.min(...prices) : 0;

      return {
        id: chain.id,
        name: chain.name,
        image: chain.image,
        color: chain.color,
        sold: totalSold,
        totalunits: 500,
        bestPrice,
      };
    });

    const allProgressData = await Promise.all(progressPromises);
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
