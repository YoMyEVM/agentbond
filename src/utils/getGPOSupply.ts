import { JsonRpcProvider, Contract, formatUnits } from 'ethers';
import { useEffect, useState } from 'react';
import { chains } from './chains';

const getGPOSupply = (chainId: number, GPOAddress: string) => {
  const [totalSupply, setTotalSupply] = useState<string | null>(null);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const provider = new JsonRpcProvider(chains.find((chain) => chain.id === chainId)?.rpc);
        const GPOContract = new Contract(GPOAddress, [
          'function totalSupply() view returns (uint256)',
        ], provider);
        
        const supply = await GPOContract.totalSupply();
        setTotalSupply(formatUnits(supply, 18));  // Assuming 18 decimal places for ERC-20 tokens
      } catch (error) {
        console.error('Error fetching total supply:', error);
      }
    };

    fetchSupply();
  }, [chainId, GPOAddress]);

  return totalSupply;
};

export default getGPOSupply;
