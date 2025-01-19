// tokens.ts

export interface Token {
    name: string;
    address: string;
    symbol: string;
    image: string; // Image stored in the public directory
  }
  
  export const baseTokens: Token[] = [
    {
      name: "USDbC",
      address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
      symbol: "USDbC",
      image: "/usdbclogo.png", // Public directory image path
    },
    {
      name: "cbETH",
      address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
      symbol: "cbETH",
      image: "/cbethlogo.png",
    },
    {
      name: "cbBTC",
      address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
      symbol: "cbBTC",
      image: "/cbbtclogo.png",
    },
    {
      name: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    // ISAI not live yet
  ];
  
  export const optimismTokens: Token[] = [
    {
      name: "OP",
      address: "0x4200000000000000000000000000000000000042",
      symbol: "OP",
      image: "/optimismlogo.svg",
    },
    {
      name: "WETH",
      address: "0x4200000000000000000000000000000000000006",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "USDC",
      address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      symbol: "USDC",
      image: "/usdclogo.png",
    },
    {
      name: "SNX",
      address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
      symbol: "SNX",
      image: "/snxlogo.png",
    },
    // ISAI not live yet
  ];
  
  export const polygonTokens: Token[] = [
    {
      name: "POL",
      address: "Native",
      symbol: "POL",
      image: "/pollogo.png",
    },
    {
      name: "USDC",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      symbol: "USDC",
      image: "/usdclogo.png",
    },
    {
      name: "WETH",
      address: "0x11CD37bb86F65419713f30673A480EA33c826872",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "OLAS",
      address: "0xFEF5d947472e72Efbb2E388c730B7428406F2F95",
      symbol: "OLAS",
      image: "/olaslogo.png",
    },
    // ISAI not live yet
  ];
  
  export const arbitrumTokens: Token[] = [
    {
      name: "ARB",
      address: "Native",
      symbol: "ARB",
      image: "/arblogo.png",
    },
    {
      name: "WETH",
      address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "USDC",
      address: "Not specified",
      symbol: "USDC",
      image: "/usdclogo.png",
    },
    // ISAI not live yet
  ];
  
  export const apeChainTokens: Token[] = [
    {
      name: "APE",
      address: "Native",
      symbol: "APE",
      image: "/apelogo.png",
    },
    {
      name: "ApeETH",
      address: "0xcF800F4948D16F23333508191B1B1591daF70438",
      symbol: "ApeETH",
      image: "/wethlogo.png",
    },
    {
      name: "ApeUSD",
      address: "0xA2235d059F80e176D931Ef76b6C51953Eb3fBEf4",
      symbol: "ApeUSD",
      image: "/usdclogo.png",
    },
    {
      name: "SUPER",
      address: "0xe31C676d8235437597581b44c1c4f8A30e90b38a",
      symbol: "SUPER",
      image: "/superlogo.png",
    },
    // ISAI not live yet
  ];
  
  export const abstractTokens: Token[] = [
    {
      name: "USDC",
      address: "Not live yet",
      symbol: "USDC",
      image: "/usdclogo.png",
    },
    {
      name: "WETH",
      address: "Not live yet",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "PENGU",
      address: "Not live yet",
      symbol: "PENGU",
      image: "/pengulogo.png",
    },
    {
      name: "ISAI",
      address: "Not live yet",
      symbol: "ISAI",
      image: "/isaitoken.png",
    },
  ];
  
  export const unichainTokens: Token[] = [
    {
      name: "ISAI",
      address: "Not live yet",
      symbol: "ISAI",
      image: "/isaitoken.png",
    },
    {
      name: "WETH",
      address: "Not live yet",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "UNI",
      address: "Not live yet",
      symbol: "UNI",
      image: "/unilogos.png",
    },
    {
      name: "USDC",
      address: "Not live yet",
      symbol: "USDC",
      image: "/usdclogo.png",
    },
  ];
  
  export const beraChainTokens: Token[] = [
    {
      name: "WETH",
      address: "Not live yet",
      symbol: "WETH",
      image: "/wethlogo.png",
    },
    {
      name: "BERA",
      address: "Not live yet",
      symbol: "BERA",
      image: "/beralogo.png",
    },
    {
      name: "HONEY",
      address: "Not live yet",
      symbol: "HONEY",
      image: "/honeylogo.png",
    },
    {
      name: "ISAI",
      address: "Not live yet",
      symbol: "ISAI",
      image: "/isaitoken.png",
    },
  ];
  