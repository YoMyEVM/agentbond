import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { chains } from "../utils/chains";
import ChainDetail from "../components/ChainDetail";
import BuyPreOrderWithToken from "../components/BuyPreOrderWithToken";
import { baseTokens, optimismTokens, polygonTokens, arbitrumTokens, apeChainTokens, abstractTokens, unichainTokens, beraChainTokens } from '../utils/tokens';
import axios from 'axios';

interface DexscreenerResponse {
  pair: {
    priceUsd: number;
  };
}

const ChainPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL params
  const [tokensWithPrice, setTokensWithPrice] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState<any[]>([]); // To store dynamic progress data

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

  const tokens = getTokensForChain(chain.name);

  const fetchTokenPrices = async (tokens: any[]) => {
    try {
      const prices = await Promise.all(
        tokens.map(async (token) => {
          try {
            const response = await axios.get<DexscreenerResponse>(
              `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
            );
            const price = response.data.pair?.priceUsd || "Price unavailable";
            return { ...token, price: price };
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
    const progress = tokens.map((token) => ({
      tokenName: token.name,
      current: 50,  // Example static value, replace with real on-chain data
      total: 100,   // Example static value, replace with real on-chain data
    }));
    setProgressData(progress);
  };

  useEffect(() => {
    if (tokens.length > 0) {
      fetchTokenPrices(tokens);
      fetchProgressData(); // Fetch dynamic progress data
    }
  }, [tokens]);

  return (
    <div className="p-6 bg-[#000] text-white text-center">
      <ChainDetail chain={chain} />
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
                current={progress ? progress.current : 0}
                total={progress ? progress.total : 100}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChainPage;

