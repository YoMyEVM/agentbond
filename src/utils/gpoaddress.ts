// gpoaddress.ts

// Define the types for the chain sale addresses
type SaleAddresses = {
  [key: string]: string;
};

// Define the sale contract addresses for each chain
export const saleAddresses: { [key: number]: SaleAddresses } = {
  10: { 
    wethSale: "0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275",  // GPO WETH Sale
    usdcSale: "0x0a562239542A7aBb2e7817018b187e462C039C1B",  // GPO USDC Sale
    opSale: "0xB1B757e71438841E20FC0a71E6F9a38BA41a9dAf",    // GPO OP Sale
    snxSale: "0xAe2a4e7a21193F9b26656cb4b2DCFDD9b4A2Be78"   // GPO SNX Sale
  },
  8452: { 
    wethSale: "0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99",  // GPO WETH Sale
    usdcSale: "0xaC94342fc2DC50E544D752C86750C1aBC29a1b51",  // GPO USDC Sale
    cbbtcSale: "0xd4e04FB72936D52c66587681874CF75AedF4a1de", // GPO CBBTC Sale
    cbethSale: "0x4409295C64d03Ef0d8263e175702BD8c2d6d86d4"  // GPO CBETH Sale
  },
  137: { 
    wethSale: "0x1FD729f324B6FDd4F12464f970b587139B24b005",  // GPO WETH Sale
    usdcSale: "0x9741E9eD8B9042A43523493271890333023bF706",  // GPO USDC Sale
    wpolSale: "0xd43B8fd4248108359e104619a26C1B62251fDde5",  // GPO WPOL Sale
    olasSale: "0xcC162F6387Ab5c12a376E99103ff4628b4dcE913"   // GPO OLAS Sale
  },
  42161: { 
    wethSale: "0xA49794ffA36f26C403000d1F2A501c5A78Db6b47",  // GPO WETH Sale
    usdcSale: "0x01406239Ef672c35E4FD6113E4DBD8e3784CB780",  // GPO USDC Sale
    arbSale: "0x091C138224Aa7272924E1fAFF5c110e3de93F6a6",   // GPO ARB Sale
    solSale: "0x180E767040263BAB041783C82fC826d85Afc6a5a"   // GPO SOL Sale
  },
  33139: { 
    wethSale: "0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4",  // GPO WETH Sale
    usdSale: "0x3aC3d1Be569a11Db02f57a3cFB0C8f332283f689",  // GPO USD Sale
    wapeSale: "0xCf93435D2c00D64375fED1d287eA244c1a055f4c"   // GPO WAPE Sale
  }
};
