import React, { useState } from 'react';
import { chains } from "../utils/chains"; // Import chains with their color properties

// Define a type for the preordered accounts (updated with Ethereum address and quantity)
interface PreorderedAccount {
  orderNumber: number;
  ethereumAddress: string;
  quantity: number;
  chain: string;
}

const PreorderedAccounts: React.FC = () => {
  // Mock data for preordered accounts with Ethereum address and quantity
  const preorderedAccounts: PreorderedAccount[] = [
    { orderNumber: 1, ethereumAddress: "0x1234...", quantity: 2, chain: "Ethereum" },
    { orderNumber: 2, ethereumAddress: "0x5678...", quantity: 5, chain: "Binance Smart Chain" },
    { orderNumber: 3, ethereumAddress: "0x9abc...", quantity: 3, chain: "Polygon" },
    { orderNumber: 4, ethereumAddress: "0xdef0...", quantity: 1, chain: "Ethereum" },
    { orderNumber: 5, ethereumAddress: "0x2345...", quantity: 4, chain: "Polygon" },
  ];

  // State to track the selected chain
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  // Filtered accounts based on the selected chain
  const filteredAccounts = selectedChain
    ? preorderedAccounts.filter(account => account.chain === selectedChain)
    : preorderedAccounts;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          marginBottom: "20px",
        }}
      >
        Preordered Accounts
      </h2>

      {/* Row of buttons for each chain */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        {chains.map((chain) => (
          <button
            key={chain.id}
            style={{
              padding: "10px 20px",
              backgroundColor: chain.color,  // Set button color based on chain color
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s",
            }}
            onClick={() => setSelectedChain(chain.name)}  // Set selected chain on button click
          >
            {chain.name}
          </button>
        ))}
        {/* Reset button */}
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ccc",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => setSelectedChain(null)} // Reset to show all accounts
        >
          All Chains
        </button>
      </div>

      {/* Table displaying preordered accounts */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
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
                padding: "10px",
                fontSize: "1rem",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Order Number
            </th>
            <th
              style={{
                padding: "10px",
                fontSize: "1rem",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Ethereum Address
            </th>
            <th
              style={{
                padding: "10px",
                fontSize: "1rem",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.map((account, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#333333" : "#444444",
              }}
            >
              <td
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                {account.orderNumber}
              </td>
              <td
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                {account.ethereumAddress}
              </td>
              <td
                style={{
                  padding: "10px",
                  fontSize: "1rem",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                {account.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreorderedAccounts;
