// tokens.ts
export interface Token {
  name: string;
  address: string;
  symbol: string;
  image: string;
  color: string;
  progress?: number[];
  dexpool: string;

}

export const baseTokens: Token[] = [
  {
    name: "USDbC",
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    symbol: "USDbC",
    image: "/usdbclogo.png",
    color: "#fff", // Coinbase blue for USDbC
    dexpool: "0x0E635F8EeED4F7279d56692D552F034ECE136019",

  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool:"0xd0b53D9277642d899DF5C87A3966A349A798F224",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "cbBTC",
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    symbol: "cbBTC",
    image: "/cbbtclogo.png",
    color: "#0052FF", // Coinbase blue for cbBTC
    dexpool: "0xfBB6Eed8e7aa03B138556eeDaF5D271A5E1e43ef",
  },
  {
    name: "cbETH",
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    symbol: "cbETH",
    image: "/cbethlogo.png",
    color: "#6697ff", // Coinbase blue for cbETH
    dexpool: "0x9BB646BF0F4Da44bfaF3d899e774DE065731EDFe",

  },

];

export const optimismTokens: Token[] = [
  {
    name: "USDC",
    address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0x1fb3cf6e48f1e7b10213e7b6d87d4c073c7fdb7b",
  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "OP",
    address: "0x4200000000000000000000000000000000000042",
    symbol: "OP",
    image: "/optimismlogo.svg",
    color: "#ed1e2c", // Coinbase blue for OP
    dexpool:"0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05",
  },
  {
    name: "SNX",
    address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    symbol: "SNX",
    image: "/snxlogo.png",
    color: "#01cefd", // Coinbase blue for SNX
    dexpool: "0x0392b358ce4547601befa962680bede836606ae2",
  },

];

export const polygonTokens: Token[] = [
  {
    name: "USDC",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0xb6e57ed85c4c9dbfef2a68711e9d6f36c56e0fcb",
  },
  {
    name: "WETH",
    address: "0x11CD37bb86F65419713f30673A480EA33c826872",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x4ccd010148379ea531d6c587cfdd60180196f9b1",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "POL",
    address: "Native",
    symbol: "POL",
    image: "/pollogo.png",
    color: "#8347e5", // Coinbase blue for POL
    dexpool: "0xa374094527e1673a86de625aa59517c5de346d32",
  },
  {
    name: "OLAS",
    address: "0xFEF5d947472e72Efbb2E388c730B7428406F2F95",
    symbol: "OLAS",
    image: "/olaslogo.png",
    color: "#ffffff", // OLAS color
    dexpool: "0x6f72dfc64873de9f27ee12f6f1ff138f15dbac74",
  },
];

export const arbitrumTokens: Token[] = [
  {
    name: "USDC",
    address: "Not specified",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0xc6962004f452be9203591991d15f6b388e09e8d0",
  },

  {
    name: "WETH",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x641c00a822e8b671738d32a431a4fb6074e5c79d",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "ARB",
    address: "Native",
    symbol: "ARB",
    image: "/arblogo.png",
    color: "#9dcced", // Coinbase blue for ARB
    dexpool: "0xc6f780497a95e246eb9449f5e4770916dcd6396a",

  },


];

export const apeChainTokens: Token[] = [
  {
    name: "ApeUSD",
    address: "0xA2235d059F80e176D931Ef76b6C51953Eb3fBEf4",
    symbol: "ApeUSD",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for ApeUSD
    dexpool: "0x99556e210123da382eded3c72aa8dcb605c3c435",
  },

  {
    name: "ApeETH",
    address: "0xcF800F4948D16F23333508191B1B1591daF70438",
    symbol: "ApeETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for ApeETH
    dexpool: "0xea03aedda280ed21f39cb6084b4f84bacd3ebc31",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "WAPE",
    address: "0x48b62137EdfA95a428D35C09E44256a739F6B557",
    symbol: "APE",
    image: "/apelogo.png",
    color: "#0148d7", // Coinbase blue for APE
    dexpool: "0xcbbe0a6d394b34a486fe9c50bf37bf835cbbae51",
  },

  {
    name: "SUPER",
    address: "0xe31C676d8235437597581b44c1c4f8A30e90b38a",
    symbol: "SUPER",
    image: "/superlogo.png",
    color: "#71f294", // Coinbase blue for SUPER
    dexpool: "0x8b2bc7d000d395cba8442e4d835a5e77e4f9d1fe",
  },
];

export const abstractTokens: Token[] = [
  {
    name: "USDC",
    address: "Not live yet",
    symbol: "USDC",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "Placeholder",

  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "Placeholder",

  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "PENGU",
    address: "Not live yet",
    symbol: "PENGU",
    image: "/pengulogo.png",
    color: "#83a9f6", // PENGU color
    dexpool: "Placeholder",

  },

];

export const unichainTokens: Token[] = [
  {
    name: "USDC",
    address: "Not live yet",
    symbol: "USDC",
    image: "/usdclogo.png",
    color:" #2775ca", // Coinbase blue for USDC
    dexpool: "Placeholder",
  },

  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "Placeholder",
  },
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",

  },
  {
    name: "UNI",
    address: "Not live yet",
    symbol: "UNI",
    image: "/unilogos.png",
    color: "#FF007A", // Coinbase blue for UNI
    dexpool: "Placeholder",
  },
];

export const beraChainTokens: Token[] = [
  {
    name: "HONEY",
    address: "Not live yet",
    symbol: "HONEY",
    image: "/honeylogo.png",
    color: "#e29d42", // HONEY color
    dexpool: "Placeholder",
  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH 
    dexpool: "Placeholder",
  },
  
  {
    name: "ISAI",
    address: "Not live yet",
    symbol: "ISAI",
    image: "/isaitoken.png",
    color: "#01ecec", // ISAI color
    dexpool: "Placeholder",
  },
  {
    name: "BERA",
    address: "Not live yet",
    symbol: "BERA",
    image: "/beralogo.png",
    color: "#78350f", // HONEY color
    dexpool: "Placeholder",
  },

];
