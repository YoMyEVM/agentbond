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
            // Check if the token has a valid dexpool address
            if (!token.dexpool) {
              console.error(`No dexpool address for ${token.symbol}`);
              return { ...token, price: "Price unavailable" };  // Return as unavailable if no dexpool
            }
  
            const response = await axios.get<DexscreenerResponse>(
              `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
            );
            
            console.log(`Response for ${token.symbol}:`, response.data);  // Inspect response
  
            if (response.data.pair) {
              const price = response.data.pair.priceUsd;
              return { ...token, price: price || "Price unavailable" };
            } else {
              console.error(`No pair found for ${token.symbol}`);
              return { ...token, price: "Price unavailable" };  // Fallback if no pair is found
            }
          } catch (error) {
            console.error(`Error fetching price for ${token.symbol}:`, error);
            return { ...token, price: "Price unavailable" };  // Return as unavailable if there was an error
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
  
  useEffect(() => {
    if (tokens.length > 0) {
      fetchTokenPrices(tokens);
    }
  }, [tokens]);

  return (
    <div className="p-6 bg-[#000] text-white text-center">
      <ChainDetail chain={chain} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tokensWithPrice.map((token) => (
            <BuyPreOrderWithToken key={token.name} token={token} price={token.price} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChainPage;
