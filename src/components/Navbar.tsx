import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

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
          <a href="/create" className="hover:text-[#01fcfc] transition">
            Create
          </a>
          <a href="/shop" className="hover:text-[#01fcfc] transition">
            Shop
          </a>
          <a href="/manage" className="hover:text-[#01fcfc] transition">
            Manage
          </a>

          {/* More Dropdown on Hover */}
          <div className="relative group">
            <button className="hover:text-[#01fcfc] transition">
              More
            </button>
            <div className="absolute hidden group-hover:block bg-black text-white shadow-lg mt-2 py-2 px-4 rounded transition-all duration-300 opacity-0 group-hover:opacity-100">
              <a href="/bond" className="block py-1 hover:text-[#fd01f5]">Bond</a>
              <a href="/overmind" className="block py-1 hover:text-[#fd01f5]">Overmind</a>
              <a href="https://myevm.network" className="block py-1 hover:text-[#fd01f5]">About</a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
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
