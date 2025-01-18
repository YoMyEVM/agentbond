import React, { useState, useEffect } from "react";
import axios from "axios";
import { chains, Chain } from "../utils/chains"; // Ensure the correct import path
import PreOrderedAccountsTable from "./PreOrderedAccountsTable"; // Import the PreOrderedAccountsTable component

interface PreOrderChain extends Chain {
  progress: number;
  price: number;  // Price is a number
}

interface EthPriceResponse {
  ethereum: {
    usd: number;
  };
}

const PreOrderTable: React.FC = () => {
  const [ethPrice, setEthPrice] = useState<number | null>(null);

  // Fetch ETH price on component mount
  useEffect(() => {
    axios
      .get<EthPriceResponse>("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      .then((response) => {
        setEthPrice(response.data.ethereum.usd);
      })
      .catch((error) => {
        console.error("Error fetching ETH price:", error);
      });
  }, []);

  // Add mock progress values (randomly generated for each chain as an example)
  const preOrderChains: PreOrderChain[] = chains.map((chain) => ({
    ...chain,
    progress: Math.floor(Math.random() * 334), // Random progress value between 0 and 333
    price: 0.004, // Set price to 0.004 ETH for each chain
  }));

  const handlePayETH = (chainName: string) => {
    console.log(`Pay ETH for ${chainName}`);
    // Logic for processing ETH payment
  };

  const handlePayCard = (chainName: string) => {
    console.log(`Pay Card for ${chainName}`);
    // Logic for processing Card payment
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      {/* Render Pre-Order Table with fixed width and max-width */}
      <table
        style={{
          width: "100%",
          maxWidth: "1200px", // Set max-width for the table
          margin: "0 auto", // Center the table
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead
          style={{
            backgroundColor: "#222222",
            borderBottom: "2px solid #444444",
          }}
        >
          <tr>
            <th
              style={{
                padding: "15px",
                fontSize: "1.2rem",
                textAlign: "left",
                color: "#fff",
                width: "15%", // Chain Name column width
              }}
            >
              Chain Name
            </th>
            <th
              style={{
                padding: "15px",
                fontSize: "1.2rem",
                textAlign: "left",
                color: "#fff",
                width: "50%", // Adjusted width for Progress column
              }}
            >
              Progress
            </th>
            <th
              style={{
                padding: "15px",
                fontSize: "1.2rem",
                textAlign: "center", // Centered the price in the column
                color: "#fff",
                width: "15%", // Current Price column width
              }}
            >
              Current Price
            </th>
            <th
              style={{
                padding: "15px",
                fontSize: "1.2rem",
                textAlign: "center",
                color: "#fff",
                width: "20%", // Pre-Order button column width
              }}
            >
              Pre-Order
            </th>
          </tr>
        </thead>
        <tbody>
          {preOrderChains.map((chain: PreOrderChain, index: number) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#333333" : "#444444",
              }}
            >
              <td
                style={{
                  padding: "12px 15px",
                  fontSize: "1rem",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                {chain.name}
              </td>
              <td style={{ padding: "12px 15px", display: "flex", alignItems: "center" }}>
                {/* Custom progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: "18px",
                    borderRadius: "5px",
                    backgroundColor: "#555", // Background color of progress bar
                    position: "relative",
                    marginRight: "10px", // Space for the text
                  }}
                >
                  <div
                    style={{
                      width: `${(chain.progress / 333) * 100}%`, 
                      height: "100%",
                      borderRadius: "5px",
                      backgroundColor: chain.color, // Chain-specific color for progress bar fill
                    }}
                  />
                </div>
                <span style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                  {chain.progress} / 333
                </span>
              </td>
              <td
                style={{
                  padding: "12px 15px",
                  fontSize: "1rem",
                  textAlign: "center", // Centered the price
                  color: "#fff",
                }}
              >
                0.004 ETH ({ethPrice ? `$${(ethPrice * 0.004).toFixed(2)}` : "Loading..."})
              </td>
              <td style={{ textAlign: "center", padding: "12px 15px" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <button
                    style={{
                      backgroundColor: "#fd01f5", // Accent color for the button
                      color: "white",
                      padding: "8px 15px", // Reduced padding for smaller buttons
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      fontSize: "0.9rem", // Smaller text size
                      textAlign: "center",
                      width: "auto", // Auto width for buttons
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#01fcfc")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fd01f5")}
                    onClick={() => handlePayETH(chain.name)}
                  >
                    Pay WETH
                  </button>
                  <button
                    style={{
                      backgroundColor: "#4CAF50", // Green color for Card payment
                      color: "white",
                      padding: "8px 15px", // Reduced padding for smaller buttons
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      fontSize: "0.9rem", // Smaller text size
                      textAlign: "center",
                      width: "auto", // Auto width for buttons
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
                    onClick={() => handlePayCard(chain.name)}
                  >
                    Pay Card
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render Preordered Accounts Table below */}
      <PreOrderedAccountsTable />
    </div>
  );
};

export default PreOrderTable;
