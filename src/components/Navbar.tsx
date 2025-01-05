import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum && typeof window.ethereum.request === 'function') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('MetaMask is not installed or Ethereum provider is unavailable.');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-6 items-center">
          <a href="/" className="text-xl font-bold text-[#fd01f5]">
            ISAI
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
