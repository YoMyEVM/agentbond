import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Navbar.tsx
const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum && typeof window.ethereum.request === "function") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("MetaMask is not installed or Ethereum provider is unavailable.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  const handleScrollToAgents = () => {
    navigate("/#agents");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-6 items-center">
          <a href="/" className="text-xl font-bold text-[#fd01f5]">
            Studio
          </a>
          <button
            onClick={handleScrollToAgents}
            className="hover:text-[#fd01f5] transition"
          >
            ISAI Agents
          </button>
          <a href="/create" className="hover:text-[#fd01f5] transition">
            Create
          </a>
          <a href="/shop" className="hover:text-[#fd01f5] transition">
            Shop
          </a>
          <a href="/equip" className="hover:text-[#fd01f5] transition">
            Equip
          </a>
          <a href="/mynfts" className="hover:text-[#fd01f5] transition">
            My NFTs
          </a>
          <a href="https://myevm.network" className="hover:text-[#fd01f5] transition">
            About
          </a>
        </div>

        {/* Right Section */}
        <div>
          {account ? (
            <button
              onClick={disconnectWallet}
              className="text-white font-bold px-4 py-2 bg-[#fd01f5] rounded hover:bg-[#fd01f5]/80 transition"
            >
              Disconnect ({account.slice(0, 6)}...{account.slice(-4)})
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="text-black font-bold px-4 py-2 bg-[#01fcfc] rounded hover:bg-[#01fcfc]/80 transition"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
