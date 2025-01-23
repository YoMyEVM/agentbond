import React from "react";
import { Link } from "react-router-dom";
import AnimatedPreOrderButton from "components/AnimatedPreOrderButton";
import { chains } from "../utils/chains"; // Import chains

interface AccountSidebarProps {
  account: string | null;
  onClose: () => void;
  disconnectWallet: () => void;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  account,
  onClose,
  disconnectWallet,
}) => {
  const genCreditsBalance = 100; // Replace with actual GenCredits balance logic
  const isaiBalance = 500; // Replace with actual ISAI balance logic

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-80 z-50 transform translate-x-0 transition-transform duration-300 shadow-lg`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-[#fd01f5]">
        <h2 className="text-lg font-bold">Account</h2>
        <button
          onClick={onClose}
          className="text-xl font-bold text-white focus:outline-none"
        >
          ×
        </button>
      </div>

      {/* PreOrder Button */}
      <div className="p-1">
        <AnimatedPreOrderButton smallText={true} />
      </div>

      {/* Wallet Info */}
      <div className="p-1 space-y-2">
        <div className="text-center">

          <p className="mb-1 text-sm font-semibold text-accent2">Connected Wallet</p>

          <p className="text-xs font-mono break-all">{account}</p>
        </div>

        {/* GenCredits and ISAI Buttons */}
        <div className="flex justify-between gap-4">
          {/* GenCredits */}
          <Link to="/buy-gen-credits" className="w-full">
            <button className="w-full px-4 py-2 bg-black text-white border-2 border-accent2 rounded hover:bg-[#333]">
              GenCredits
              <br />
              <span className="text-accent1 text-sm">{genCreditsBalance}</span>
            </button>
          </Link>

          {/* ISAI */}
          <button className="w-full px-4 py-2 bg-black text-white border-2 border-[#fd01f5] rounded hover:bg-[#333]">
            ISAI
            <br />
            <span className="text-accent1 text-sm">{isaiBalance}</span>
          </button>
        </div>

        {/* Profile, Check-In, Settings, Disconnect Buttons */}
        <div className="flex justify-between mt-6 gap-2">
          {/* Profile */}
          <Link to="/profile" className="flex flex-col items-center space-y-1">
            <img
              src="/user.png"
              alt="Profile"
              className="w-12 h-12 bg-accent2 rounded p-1"
            />
            <span className="text-xs">Profile</span>
          </Link>

          {/* Check-In */}
          <Link to="/daily-checkin" className="flex flex-col items-center space-y-1">
            <img
              src="/dailycheckin.png"
              alt="Check-In"
              className="w-12 h-12 bg-[#00FF00] rounded p-1"
            />
            <span className="text-xs">Check-In</span>
          </Link>

          {/* Settings */}
          <Link to="/settings" className="flex flex-col items-center space-y-1">
            <img
              src="/setting.png"
              alt="Settings"
              className="w-12 h-12 bg-[#01fcfc] rounded p-1"
            />
            <span className="text-xs">Settings</span>
          </Link>

          {/* Disconnect */}
          <button
            onClick={disconnectWallet}
            className="flex flex-col items-center space-y-1 focus:outline-none"
          >
            <img
              src="/exit.png"
              alt="Disconnect"
              className="w-12 h-12 bg-red-600 rounded p-1"
            />
            <span className="text-xs">Disconnect</span>
          </button>
        </div>

        {/* Chains List */}
        <div className="mt-2">
          <h3 className="text-lg font-bold text-center mb-2">Owned Agents</h3>
          <ul className="space-y-2">
            {chains.map((chain) => (
              <li
                key={chain.id}
                className="flex items-center justify-between px-4 py-2 border rounded"
                style={{ borderColor: chain.color }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: chain.color }}
                >
                  {chain.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
