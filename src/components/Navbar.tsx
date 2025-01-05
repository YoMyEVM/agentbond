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
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-6 items-center">
          <a href="/" className="text-xl font-bold text-purple-400">
            ISAI
          </a>
          <a href="#features" className="hover:text-purple-300 transition">
            Features
          </a>

        </div>

        {/* Right Section */}
        <div>
          {account ? (
            <button
              onClick={disconnectWallet}
              className="text-white font-bold px-4 py-2 bg-purple-500 rounded hover:bg-purple-400 transition"
            >
              Disconnect ({account.slice(0, 6)}...{account.slice(-4)})
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="text-white font-bold px-4 py-2 bg-purple-500 rounded hover:bg-purple-400 transition"
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
