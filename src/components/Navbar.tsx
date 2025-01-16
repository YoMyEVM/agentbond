import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [genCreditsBalance, setGenCreditsBalance] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // To manage mobile menu toggle
  const [isMobile, setIsMobile] = useState(false); // Track if it's a mobile device

  // Function to fetch GenCredits balance (example function)
  const fetchGenCreditsBalance = async () => {
    setGenCreditsBalance(100); // Set your balance value here
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
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target && !(event.target as HTMLElement).closest('.dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchGenCreditsBalance(); // Fetch balance on component mount
  }, []);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  useEffect(() => {
    // Listen for resize events to update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 flex justify-between items-center h-6 md:h-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/studiologo.png"
              alt="Studio Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-[#fd01f5] hidden md:inline-block">Studio</span> {/* Hide on mobile */}
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="/create" className="hover:text-[#01fcfc] transition">Create</a>
            <a href="/shop" className="hover:text-[#01fcfc] transition">Shop</a>
            <a href="/manage" className="hover:text-[#01fcfc] transition">Manage</a>

            {/* More Dropdown */}
            <div className="relative dropdown">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:text-[#01fcfc] transition">
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-black text-white shadow-lg mt-2 py-2 px-4 rounded transition-all duration-300 opacity-100 dropdown-menu">
                  <a href="/bond" className="block py-1 hover:text-[#fd01f5]">Bond</a>
                  <a href="/overmind" className="block py-1 hover:text-[#fd01f5]">Overmind</a>
                  <a href="https://myevm.network" className="block py-1 hover:text-[#fd01f5]">About</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link to="/buy-gen-credits">
            <button
              className="px-2 py-1 bg-black text-white border-2 border-accent2 rounded hover:bg-[#333] transition md:px-4 md:py-2"
            >
              GenCredits: <span className="text-accent1">{genCreditsBalance}</span>
            </button>
          </Link>

          {/* Wallet Connection Button */}
          {account ? (
            <button
              onClick={disconnectWallet}
              className="text-white font-bold px-2 py-1 bg-[#fd01f5] rounded hover:bg-[#fd01f5]/80 transition md:px-4 md:py-2"
            >
              {/* Show only "Disconnect" without address on mobile */}
              {isMobile ? "Disconnect" : `Disconnect (${account.slice(0, 6)}...${account.slice(-4)})`}
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="text-black font-bold px-6 py-2 bg-[#01fcfc] rounded hover:bg-[#01fcfc]/80 transition md:px-4 md:py-2"
            >
              Connect
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <span className="text-white">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          <a href="/create" className="hover:text-[#01fcfc] transition">Create</a>
          <a href="/shop" className="hover:text-[#01fcfc] transition">Shop</a>
          <a href="/manage" className="hover:text-[#01fcfc] transition">Manage</a>
          <a href="/bond" className="hover:text-[#fd01f5] transition">Bond</a>
          <a href="/overmind" className="hover:text-[#fd01f5] transition">Overmind</a>
          <a href="https://myevm.network" className="hover:text-[#fd01f5] transition">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
