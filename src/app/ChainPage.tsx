import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { chains } from "../utils/chains";
import ChainDetail from "../components/ChainDetail";
import BuyPreOrderWithToken from "../components/BuyPreOrderWithToken";
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
import axios from "axios";
import { ethers } from "ethers";
import { GpoSaleABI } from "../utils/GpoSaleABI";

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
  const chain = !isNaN(chainId)
    ? chains.find((c) => c.id === chainId)
    : undefined;

  if (!chain) {
    return (
      <div className="p-6 bg-[#000] text-white">
        <p>Chain not found!</p>
      </div>
    );
  }

  // Filter tokens by chain
  const getTokensForChain = (chainName: string) => {
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

  const tokens = getTokensForChain(chain.name);

  // Fetch DexScreener price + on-chain GPO price
  const fetchTokenPricesAndGPO = async (tokens: any[]) => {
    const provider = new ethers.JsonRpcProvider(chain.rpc);

    const dataPromises = tokens.map(async (token) => {
      // 1) Dex price in USD
      let dexPriceUsd = 0;
      try {
        const res = await axios.get<DexscreenerResponse>(
          `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
        );
        dexPriceUsd = res.data?.pair?.priceUsd || 0;
      } catch (err) {
        console.error(`Error fetching Dex price for ${token.symbol}:`, err);
      }

      // 2) On-chain GPO price
      let onChainPricePerToken = 0;
      if (token.gposale && token.gposale !== "Placeholder") {
        try {
          const gpoContract = new ethers.Contract(token.gposale, GpoSaleABI, provider);
          const conditionId = await gpoContract.getActiveClaimConditionId();
          const condition = await gpoContract.getClaimConditionById(conditionId);

          // 'pricePerToken' from the claim condition is a BigNumber
          const rawPrice = condition.pricePerToken;
          // parse decimals from string to number
          const decimals = Number(token.decimals) || 18;

          onChainPricePerToken = parseFloat(
            ethers.formatUnits(rawPrice, decimals)
          );
        } catch (err) {
          console.error(`Error fetching on-chain price from GpoSale for ${token.name}:`, err);
        }
      }

      // 3) Multiply to get total cost in USD for 1 GPO
      const finalPriceUsd = dexPriceUsd * onChainPricePerToken;

      return {
        ...token,
        dexPriceUsd,
        onChainPricePerToken,
        finalPriceUsd, // cost in USD of 1 GPO
      };
    });

    const results = await Promise.all(dataPromises);
    setTokensWithPrice(results);
    setLoading(false);
  };

  // Fetch supply progress data
  const fetchProgressData = async () => {
    const progress = tokens.map(async (token) => {
      const provider = new ethers.JsonRpcProvider(chain.rpc);
      const contract = new ethers.Contract(
        token.gposale,
        ["function totalSupply() public view returns (uint256)"],
        provider
      );

      try {
        const totalSupply = await contract.totalSupply();
        const formattedTotalSupply = parseFloat(ethers.formatUnits(totalSupply, 18));
        return {
          tokenName: token.name,
          sold: formattedTotalSupply,
          totalunits: 100,
        };
      } catch (error) {
        console.error(`Error fetching totalSupply for ${token.name}:`, error);
        return {
          tokenName: token.name,
          sold: 0,
          totalunits: 100,
        };
      }
    });

    const progressData = await Promise.all(progress);
    setProgressData(progressData);
  };

  useEffect(() => {
    if (tokens.length > 0) {
      fetchTokenPricesAndGPO(tokens);
      fetchProgressData();
    }
  }, [tokens]);

  const totalSold = progressData.reduce((sum, d) => sum + d.sold, 0);
  const totalUnits = 500;

  return (
    <div className="p-6 bg-[#000] text-white text-center">
      <ChainDetail chain={chain} sold={totalSold} totalunits={totalUnits} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tokensWithPrice.map((token) => {
            const progress = progressData.find((d) => d.tokenName === token.name);
            const sold = progress ? progress.sold : 0;
            const totalunits = progress ? progress.totalunits : 100;

            // If you want to show the USD price, pass finalPriceUsd.
            // If you want to show the on-chain token cost, pass onChainPricePerToken.
            return (
              <BuyPreOrderWithToken
                key={token.name}
                token={token}
                price={token.finalPriceUsd} // or token.onChainPricePerToken
                sold={sold}
                totalunits={totalunits}
                // If you still store currentprice in tokens.ts, you can show it, otherwise remove:
                currentprice={token.currentprice || ""}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChainPage;
