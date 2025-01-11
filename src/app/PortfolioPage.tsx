import React, { useState } from "react";

const PortfolioPage: React.FC = () => {
  // State to track the active section: Manage Tokens or Manage NFTs
  const [activeSection, setActiveSection] = useState<string>("tokens");
  // State to track the active NFT category: Smart NFTs or All NFTs
  const [activeCategory, setActiveCategory] = useState<string>("smartNFTs");

  // Function to handle section changes (Manage Tokens or Manage NFTs)
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Function to handle category changes (Smart NFTs or All NFTs)
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">Portfolio</h1>
      <p className="text-3xl text-gray-300 mt-4">Manage Your Tokens and NFTs</p>

      {/* Toggle between Manage Tokens and Manage NFTs */}
      <div className="mt-8 mb-8">
        <button
          onClick={() => handleSectionChange("tokens")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeSection === "tokens"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Manage Tokens
        </button>
        <button
          onClick={() => handleSectionChange("nfts")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeSection === "nfts"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Manage NFTs
        </button>
      </div>

      {/* Manage Tokens Section */}
      {activeSection === "tokens" && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-[#fd01f5] mb-4">Manage Tokens</h2>
          <p className="text-gray-300">
            Select to manage your tokens, make transactions, or check your balances.
          </p>
        </div>
      )}

      {/* Manage NFTs Section */}
      {activeSection === "nfts" && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#fd01f5] mb-4">Manage NFTs</h2>
          <p className="text-gray-300 mb-4">
            Select an option to manage or view your NFTs.
          </p>

          {/* Toggle buttons for Smart NFTs and All NFTs */}
          <div className="mb-8">
            <button
              onClick={() => handleCategoryChange("smartNFTs")}
              className={`px-6 py-2 mx-2 text-lg rounded ${
                activeCategory === "smartNFTs"
                  ? "bg-[#fd01f5] text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Smart NFTs
            </button>
            <button
              onClick={() => handleCategoryChange("allNFTs")}
              className={`px-6 py-2 mx-2 text-lg rounded ${
                activeCategory === "allNFTs"
                  ? "bg-[#fd01f5] text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              All NFTs
            </button>
          </div>

          {/* Conditionally render components based on active category */}
          {activeCategory === "smartNFTs" && (
            <div className="text-gray-400">
              <p>Manage your Smart NFTs here.</p>
            </div>
          )}
          {activeCategory === "allNFTs" && (
            <div className="text-gray-400">
              <p>View all of your NFTs here.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PortfolioPage;
