export interface Chain {  
  name: string;
  id: number;
  rpc: string;
  symbol?: string;
  explorerUrl?: string;
  image?: string;
  color: string;  // Added color property
}

export const colors: { [key in 'polygon' | 'baseChain' | 'apeChain' | 'abstract' | 'optimism' | 'beraChain' | 'arbitrum' | 'uniChain']: string } = {
  polygon: '#8247E5',  
  baseChain: '#0052FF',  
  apeChain: '#0b48d7',
  abstract: '#06e077',  
  optimism: '#FF0420',   
  beraChain: '#E8663D',  
  arbitrum: '#2bbdfa',   
  uniChain: '#FF007A',   
};

export const chains: Chain[] = [
  {
    name: "Base",
    id: 8453,
    rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BASE",
    explorerUrl: "https://basescan.org/",
    image: "/basechainlogo.svg",
    color: colors.baseChain,  // Assigning color
  },
  {
    name: "Optimism",
    id: 10,
    rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "OP",
    explorerUrl: "https://optimistic.etherscan.io",
    image: "/optimismlogo.svg",
    color: colors.optimism,  // Assigning color
  },
  {
    name: "Polygon",
    id: 137,
    rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "MATIC",
    explorerUrl: "https://polygonscan.com",
    image: "/polygonlogo.svg",
    color: colors.polygon,  // Assigning color
  },
  {
    name: "Arbitrum",
    id: 42161,
    rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ARB",
    explorerUrl: "https://arbiscan.io",
    image: "/arbitrumlogo.svg",
    color: colors.arbitrum,  // Assigning color
  },
  {
    name: "ApeChain",
    id: 33139,
    rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "APE",
    explorerUrl: "https://apescan.io/",
    image: "/apechainlogo.png",
    color: colors.apeChain,  // Assigning color
  },
  {
    name: "Abstract",
    id: 2741,
    rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ABS",
    explorerUrl: "https://explorer.testnet.abs.xyz/",
    image: "/abstractlogo.jpg",
    color: colors.abstract,  // Assigning color
  },
  {
    name: "Unichain",
    id: 130,
    rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "UNI",
    explorerUrl: "https://sepolia.uniscan.xyz/",
    image: "/unichainlogo.svg",
    color: colors.uniChain,  // Assigning color
  },
  {
    name: "BeraChain",
    id: 80084,
    rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BERA",
    explorerUrl: "https://berachain.nodefleet.net/",
    image: "/berachainlogo.webp",
    color: colors.beraChain,  // Assigning color
  },
];
