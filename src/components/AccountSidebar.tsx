import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-80 z-50 transform translate-x-0 transition-transform duration-300 shadow-lg`}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#fd01f5]">
        <h2 className="text-lg font-bold">Account</h2>
        <button
          onClick={onClose}
          className="text-xl font-bold text-white focus:outline-none"
        >
          ×
        </button>
      </div>
      <div className="p-4 space-y-6">
        {/* Centered Connected Wallet */}
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold">Connected Wallet</p>
          <p className="text-xs font-mono break-all">{account}</p>
        </div>
        {/* Buttons */}
        <div className="flex justify-between">
          {/* Profile */}
          <Link to="/profile" className="flex flex-col items-center space-y-1">
            <img
              src="/user.png"
              alt="Profile"
              className="w-12 h-12 bg-accent2 rounded p-1"
            />
            <span className="text-xs">Profile</span>
          </Link>
          {/* Settings */}
          <Link to="/settings" className="flex flex-col items-center space-y-1">
            <img
              src="/setting.png"
              alt="Settings"
              className="w-12 h-12 bg-accent1 rounded p-1"
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
      </div>
    </div>
  );
};

export default AccountSidebar;
