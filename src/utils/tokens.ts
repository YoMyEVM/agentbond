// tokens.ts
export interface Token {
  name: string;
  address: string;
  symbol: string;
  image: string;
  color: string;
  progress?: number[];

}

export const baseTokens: Token[] = [
  {
    name: "USDbC",
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    symbol: "USDbC",
    image: "/usdbclogo.png",
    color: "#fff", // Coinbase blue for USDbC

  },
  {
    name: "cbETH",
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    symbol: "cbETH",
    image: "/cbethlogo.png",
    color: "#6697ff", // Coinbase blue for cbETH

  },
  {
    name: "cbBTC",
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    symbol: "cbBTC",
    image: "/cbbtclogo.png",
    color: "#0052FF", // Coinbase blue for cbBTC

  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
  },

];

export const optimismTokens: Token[] = [
  {
    name: "OP",
    address: "0x4200000000000000000000000000000000000042",
    symbol: "OP",
    image: "/optimismlogo.svg",
    color: "#ed1e2c", // Coinbase blue for OP

  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "USDC",
    address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC

  },
  {
    name: "SNX",
    address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    symbol: "SNX",
    image: "/snxlogo.png",
    color: "#170659", // Coinbase blue for SNX

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color

  },
];

export const polygonTokens: Token[] = [
  {
    name: "POL",
    address: "Native",
    symbol: "POL",
    image: "/pollogo.png",
    color: "#8347e5", // Coinbase blue for POL

  },
  {
    name: "USDC",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC

  },
  {
    name: "WETH",
    address: "0x11CD37bb86F65419713f30673A480EA33c826872",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "OLAS",
    address: "0xFEF5d947472e72Efbb2E388c730B7428406F2F95",
    symbol: "OLAS",
    image: "/olaslogo.png",
    color: "#ffffff", // OLAS color

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
  },
];

export const arbitrumTokens: Token[] = [
  {
    name: "ARB",
    address: "Native",
    symbol: "ARB",
    image: "/arblogo.png",
    color: "#9dcced", // Coinbase blue for ARB


  },
  {
    name: "WETH",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "USDC",
    address: "Not specified",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color

 
  },
];

export const apeChainTokens: Token[] = [
  {
    name: "APE",
    address: "Native",
    symbol: "APE",
    image: "/apelogo.png",
    color: "#0148d7", // Coinbase blue for APE

  },
  {
    name: "ApeETH",
    address: "0xcF800F4948D16F23333508191B1B1591daF70438",
    symbol: "ApeETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for ApeETH

  },
  {
    name: "ApeUSD",
    address: "0xA2235d059F80e176D931Ef76b6C51953Eb3fBEf4",
    symbol: "ApeUSD",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for ApeUSD

  },
  {
    name: "SUPER",
    address: "0xe31C676d8235437597581b44c1c4f8A30e90b38a",
    symbol: "SUPER",
    image: "/superlogo.png",
    color: "#71f294", // Coinbase blue for SUPER
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
  },
];

export const abstractTokens: Token[] = [
  {
    name: "USDC",
    address: "Not live yet",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC

  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "PENGU",
    address: "Not live yet",
    symbol: "PENGU",
    image: "/pengulogo.png",
    color: "#83a9f6", // PENGU color

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
  },
];

export const unichainTokens: Token[] = [
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color

  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "UNI",
    address: "Not live yet",
    symbol: "UNI",
    image: "/unilogos.png",
    color: "#FF007A", // Coinbase blue for UNI

  },
  {
    name: "USDC",
    address: "Not live yet",
    symbol: "USDC",
    image: "/usdclogo.png",
    color:" #2775ca", // Coinbase blue for USDC
 
  },
];

export const beraChainTokens: Token[] = [
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH

  },
  {
    name: "BERA",
    address: "Not live yet",
    symbol: "BERA",
    image: "/beralogo.png",

    color: "#78350f", // HONEY color
  },
  {
    name: "HONEY",
    address: "Not live yet",
    symbol: "HONEY",
    image: "/honeylogo.png",
    color: "#e29d42", // HONEY color

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color

  },
];
