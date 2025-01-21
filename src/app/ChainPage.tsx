import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { chains } from "../utils/chains";
import ChainDetail from "../components/ChainDetail";
import BuyPreOrderWithToken from "../components/BuyPreOrderWithToken";
import { baseTokens, optimismTokens, polygonTokens, arbitrumTokens, apeChainTokens, abstractTokens, unichainTokens, beraChainTokens } from '../utils/tokens';
import axios from 'axios';
import { ethers } from 'ethers';

interface DexscreenerResponse {
  pair: {
    priceUsd: number;
  };
}

const ChainPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tokensWithPrice, setTokensWithPrice] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState<any[]>([]);

  const chainId = id ? Number(id) : NaN;
  const chain = !isNaN(chainId) ? chains.find((chain) => chain.id === chainId) : undefined;

  if (!chain) {
    return (
      <div className="p-6 bg-[#000] text-white">
        <p>Chain not found!</p>
      </div>
    );
  }

  const getTokensForChain = (chainName: string) => {
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

  const tokens = getTokensForChain(chain.name);

  const fetchTokenPrices = async (tokens: any[]) => {
    try {
      const prices = await Promise.all(
        tokens.map(async (token) => {
          try {
            const response = await axios.get<DexscreenerResponse>(`https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`);
            const price = response.data.pair?.priceUsd || "Price unavailable";
            return { ...token, price };
          } catch (error) {
            console.error(`Error fetching price for ${token.symbol}:`, error);
            return { ...token, price: "Price unavailable" };
          }
        })
      );
      setTokensWithPrice(prices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching token prices:", error);
      setLoading(false);
    }
  };

  const fetchProgressData = async () => {
    const progress = tokens.map(async (token) => {
      const provider = new ethers.JsonRpcProvider(chain.rpc);
      const contract = new ethers.Contract(token.gposale, [
        "function totalSupply() public view returns (uint256)"
      ], provider);

      try {
        const totalSupply = await contract.totalSupply();
        const formattedTotalSupply = ethers.formatUnits(totalSupply, 18); // Adjust decimals if needed
        return {
          tokenName: token.name,
          sold: parseFloat(formattedTotalSupply),
          totalunits: 80, // Total possible units to sell per token
        };
      } catch (error) {
        console.error(`Error fetching data for ${token.name}:`, error);
        return {
          tokenName: token.name,
          sold: 0,
          totalunits: 80,
        };
      }
    });

    const progressData = await Promise.all(progress);
    setProgressData(progressData);
  };

  // Calculate the total sold and total units across all tokens
  const totalSold = progressData.reduce((sum, data) => sum + data.sold, 0);
  const totalUnits = 450; // Total units for all tokens combined

  useEffect(() => {
    if (tokens.length > 0) {
      fetchTokenPrices(tokens);
      fetchProgressData(); // Fetch dynamic progress data
    }
  }, [tokens]);

  return (
    <div className="p-6 bg-[#000] text-white text-center">
      {/* Pass total sold and total units to ChainDetail */}
      <ChainDetail chain={chain} sold={totalSold} totalunits={totalUnits} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tokensWithPrice.map((token) => {
            const progress = progressData.find((data) => data.tokenName === token.name);
            return (
              <BuyPreOrderWithToken
                key={token.name}
                token={token}
                price={token.price}
                sold={progress ? progress.sold : 0}
                totalunits={progress ? progress.totalunits : 80}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};


export default ChainPage;
