export interface Chain {  
  name: string;
  id: number;
  rpc: string;
  symbol?: string;
  explorerUrl?: string;
  image?: string;
  color: string;
  WETHaddress: string;
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
    name: "Optimism",
    id: 10,
    rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "OP",
    explorerUrl: "https://optimistic.etherscan.io",
    image: "/optimismlogo.svg",
    color: colors.optimism,
    WETHaddress: "0x4200000000000000000000000000000000000006",
  },
  {
    name: "Arbitrum",
    id: 42161,
    rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ARB",
    explorerUrl: "https://arbiscan.io",
    image: "/arbitrumlogo.svg",
    color: colors.arbitrum,
    WETHaddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
  {
    name: "Polygon",
    id: 137,
    rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "MATIC",
    explorerUrl: "https://polygonscan.com",
    image: "/polygonlogo.svg",
    color: colors.polygon,
    WETHaddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  },
  {
    name: "Base",
    id: 8453,
    rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BASE",
    explorerUrl: "https://basescan.org/",
    image: "/basechainlogo.svg",
    color: colors.baseChain,
    WETHaddress: "0x4200000000000000000000000000000000000006",
  },

  {
    name: "ApeChain",
    id: 33139,
    rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "APE",
    explorerUrl: "https://apescan.io/",
    image: "/apechainlogo.png",
    color: colors.apeChain,
    WETHaddress: "0xcF800F4948D16F23333508191B1B1591daF70438",
  },
  {
    name: "Abstract",
    id: 2741,
    rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ABS",
    explorerUrl: "https://explorer.testnet.abs.xyz/",
    image: "/abstractlogo.jpg",
    color: colors.abstract,
    WETHaddress: "null", // Placeholder for Abstract
  },
  {
    name: "Unichain",
    id: 130,
    rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "UNI",
    explorerUrl: "https://sepolia.uniscan.xyz/",
    image: "/unichainlogo.svg",
    color: colors.uniChain,
    WETHaddress: "null", // Placeholder for Abstract
  },
  {
    name: "BeraChain",
    id: 80084,
    rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BERA",
    explorerUrl: "https://berachain.nodefleet.net/",
    image: "/berachainlogo.webp",
    color: colors.beraChain,
    WETHaddress: "null", // Placeholder for Abstract
  }, 
];
