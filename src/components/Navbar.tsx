import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "./AccountSidebar";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);
  const [genCreditsBalance, setGenCreditsBalance] = useState<number>(0);

  const fetchGenCreditsBalance = async () => {
    setGenCreditsBalance(100);
  };

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
    setIsAccountPanelOpen(false);
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) setAccount(accounts[0]);
      }
    };
    checkConnection();
    fetchGenCreditsBalance();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 flex justify-between items-center h-10">
        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/studiologo.png"
            alt="Studio Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-3xl font-bold text-[#fd01f5] hidden md:block">
            Studio
          </span>
        </a>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link to="/buy-gen-credits">
            <button className="px-4 py-2 bg-black text-white border-2 border-accent2 rounded hover:bg-[#333]">
              GenCredits: <span className="text-accent1">{genCreditsBalance}</span>
            </button>
          </Link>
          {account ? (
            <button
              onClick={() => setIsAccountPanelOpen(true)}
              className="px-4 py-2 bg-[#fd01f5] rounded hover:bg-[#fd01f5]/80 text-white font-bold"
            >
              Account
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="px-6 py-2 bg-[#01fcfc] rounded hover:bg-[#01fcfc]/80 text-black font-bold"
            >
              Connect
            </button>
          )}
        </div>
      </div>

      {/* Account Sidebar */}
      {isAccountPanelOpen && (
        <AccountSidebar
          account={account}
          onClose={() => setIsAccountPanelOpen(false)}
          disconnectWallet={disconnectWallet}
        />
      )}
    </nav>
  );
};

export default Navbar;
