export interface Chain {  
  name: string;
  id: number;
  rpc: string;
  symbol?: string;
  explorerUrl?: string;
  image?: string;
  color: string;  
  GPOaddress: string;
  WETHaddress: string;
  GPOexplorerurl: string;
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
    color: colors.baseChain,
    GPOaddress: "0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99",
    WETHaddress: "0x4200000000000000000000000000000000000006",
    GPOexplorerurl: "https://basescan.org/address/0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99"
  },
  {
    name: "Optimism",
    id: 10,
    rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "OP",
    explorerUrl: "https://optimistic.etherscan.io",
    image: "/optimismlogo.svg",
    color: colors.optimism,
    GPOaddress: "0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275",
    WETHaddress: "0x4200000000000000000000000000000000000006",
    GPOexplorerurl: "https://optimistic.etherscan.io/address/0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275"
  },
  {
    name: "Polygon",
    id: 137,
    rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "MATIC",
    explorerUrl: "https://polygonscan.com",
    image: "/polygonlogo.svg",
    color: colors.polygon,
    GPOaddress: "0x1FD729f324B6FDd4F12464f970b587139B24b005",
    WETHaddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    GPOexplorerurl: "https://polygonscan.com/address/0x1FD729f324B6FDd4F12464f970b587139B24b005"
  },
  {
    name: "Arbitrum",
    id: 42161,
    rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ARB",
    explorerUrl: "https://arbiscan.io",
    image: "/arbitrumlogo.svg",
    color: colors.arbitrum,
    GPOaddress: "0xA49794ffA36f26C403000d1F2A501c5A78Db6b47",
    WETHaddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GPOexplorerurl: "https://arbiscan.io/address/0xA49794ffA36f26C403000d1F2A501c5A78Db6b47"
  },
  {
    name: "ApeChain",
    id: 33139,
    rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "APE",
    explorerUrl: "https://apescan.io/",
    image: "/apechainlogo.png",
    color: colors.apeChain,
    GPOaddress: "0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4",
    WETHaddress: "0xcF800F4948D16F23333508191B1B1591daF70438",
    GPOexplorerurl: "https://apechain.calderaexplorer.xyz/address/0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4"
  },

];
