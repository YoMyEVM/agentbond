import React from "react";
import { chains, Chain } from '../utils/chains'; // Ensure the correct import path

// Define a new type that includes progress
interface PreOrderChain extends Chain {
  progress: number;
}

const PreOrderPage: React.FC = () => {
  // Add mock progress values (randomly generated for each chain as an example)
  const preOrderChains: PreOrderChain[] = chains.map((chain) => ({
    ...chain,
    progress: Math.floor(Math.random() * 334), // Random progress value between 0 and 333
  }));

  return (
    <div
      style={{
        backgroundColor: "#101010", // Dark background color for the page
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2rem",
          color: "#fd01f5", // Accent color for title
        }}
      >
        Guarentee your ISAI Agent NFT
      </h1>
      {/* Apply accent2 and 2xl text size */}
      <p className="text-accent1 text-2xl">333 Genesis Agents on Each Chain</p>

      <table
        style={{
          width: "80%",
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
                width: "70%", // Progress column width
              }}
            >
              Progress
            </th>
            <th
              style={{
                padding: "15px",
                fontSize: "1.2rem",
                textAlign: "center",
                color: "#fff",
                width: "15%", // Pre-Order button column width
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
                      width: `${(chain.progress / 333) * 100}%`, // Calculate width based on progress
                      height: "100%",
                      borderRadius: "5px",
                      backgroundColor: chain.color, // Chain-specific color for progress bar fill
                    }}
                  />
                </div>
                <span style={{ fontSize: "1rem" }}>
                  {chain.progress} / 333
                </span>
              </td>
              <td style={{ textAlign: "center", padding: "12px 15px" }}>
                <button
                  style={{
                    backgroundColor: "#fd01f5", // Accent color for the button
                    color: "white",
                    padding: "10px 25px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#01fcfc")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fd01f5")}
                >
                  Pre-Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreOrderPage;
