import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  // @ts-ignore
  const [genCreditBalance, setGenCreditBalance] = useState<number>(100);

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 flex justify-between items-center h-12">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            {/* Studio Logo */}
            <img
              src="/studiologo.png"
              alt="Studio Logo"
              className="w-12 h-12 object-contain" // 12x12 size without stretching
            />
            <span className="text-xl font-bold text-[#fd01f5]">Studio</span>
          </a>

          <a href="/create" className="hover:text-[#fd01f5] transition">
            Create
          </a>
          <a href="/shop" className="hover:text-[#fd01f5] transition">
            Shop
          </a>
          <a href="/manage" className="hover:text-[#fd01f5] transition">
            Manage
          </a>
          <a href="/portfolio" className="hover:text-[#fd01f5] transition">
            Portfolio
          </a>
          <a href="/bond" className="hover:text-[#fd01f5] transition">
            Bond
          </a>
          <a href="/overmind" className="hover:text-[#fd01f5] transition">
            Overmind
          </a>

          <a href="https://myevm.network" className="hover:text-[#fd01f5] transition">
            About
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Display Mock Gen Credit Balance */}
          <div className="text-white font-bold">
            <span>GenCredit Balance: </span>
            <span className="text-[#01fcfc]">{genCreditBalance}</span>
          </div>

          {/* Get Gen Credits Button */}
          <Link to="/buy-gen-credits">
            <button
              className="text-accent1 font-bold px-4 py-2 border border-accent2 rounded hover:bg-[#fd01f5] hover:text-black transition"
            >
              Get Gen Credits
            </button>
          </Link>

          {/* Wallet Connection Button */}
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
