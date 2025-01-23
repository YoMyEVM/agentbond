import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPreOrderButton from "components/AnimatedPreOrderButton";
import { chains } from "../utils/chains"; // Import chains
import { baseTokens, optimismTokens, polygonTokens, arbitrumTokens, apeChainTokens} from "../utils/tokens"; // Import tokens
import { ethers } from "ethers"; // Import ethers

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
  const [preOrderedAgents, setPreOrderedAgents] = useState<{
    [key: string]: number | "loading";
  }>(
    chains.reduce((acc, chain) => {
      acc[chain.name] = "loading"; // Initialize each chain with "loading"
      return acc;
    }, {} as { [key: string]: number | "loading" })
  );

  const tokenLists: { [key: string]: any[] } = {
    Base: baseTokens,
    Optimism: optimismTokens,
    Polygon: polygonTokens,
    Arbitrum: arbitrumTokens,
    ApeChain: apeChainTokens,
  };

  const fetchGPOBalances = async () => {
    if (!account) return;

    for (const chain of chains) {
      console.log(`Fetching balances for chain: ${chain.name}`);
      const provider = new ethers.JsonRpcProvider(chain.rpc);

      const tokens = tokenLists[chain.name] || [];
      console.log(`Tokens for ${chain.name}:`, tokens);

      let totalGPO = BigInt(0);

      for (const token of tokens) {
        if (token.gposale && token.gposale !== "Placeholder") {
          try {
            const gpoContract = new ethers.Contract(
              token.gposale,
              ["function balanceOf(address account) external view returns (uint256)"],
              provider
            );

            const balance = await gpoContract.balanceOf(account);
            console.log(`Balance for ${token.name} on ${chain.name}:`, balance.toString());

            totalGPO += BigInt(balance.toString());
          } catch (error) {
            console.error(`Error fetching balance for ${token.name} on ${chain.name}:`, error);
          }
        }
      }

      const totalGPOConverted = Number(totalGPO) / 10 ** 18;
      console.log(`Total GPO for ${chain.name}:`, totalGPOConverted);

      // Update state using functional updates
      setPreOrderedAgents((prev) => ({
        ...prev,
        [chain.name]: totalGPOConverted || 0, // Ensure no NaN is set
      }));
    }
  };

  useEffect(() => {
    fetchGPOBalances();
  }, [account]);

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
      <div className="p-3">
        <AnimatedPreOrderButton smallText={true} />
      </div>

      {/* Wallet Info */}
      <div className="p-1 space-y-2">
        <div className="text-center">
          <p className="mb-1 text-sm font-semibold text-accent2">
            Connected Wallet
          </p>
          <p className="text-xs font-mono break-all">{account}</p>
        </div>

        {/* Profile, Check-In, Settings, Disconnect Buttons */}
        <div className="flex justify-between mt-6 gap-2">
          <Link to="/profile" className="flex flex-col items-center space-y-1">
            <img
              src="/user.png"
              alt="Profile"
              className="w-12 h-12 bg-accent2 rounded p-1"
            />
            <span className="text-xs">Profile</span>
          </Link>

          <Link to="/daily-checkin" className="flex flex-col items-center space-y-1">
            <img
              src="/dailycheckin.png"
              alt="Check-In"
              className="w-12 h-12 bg-[#00FF00] rounded p-1"
            />
            <span className="text-xs">Check-In</span>
          </Link>

          <Link to="/settings" className="flex flex-col items-center space-y-1">
            <img
              src="/setting.png"
              alt="Settings"
              className="w-12 h-12 bg-[#01fcfc] rounded p-1"
            />
            <span className="text-xs">Settings</span>
          </Link>

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
            {chains.map((chain) => {
              const agentCount = preOrderedAgents[chain.name];
              console.log(`Rendering agentCount for ${chain.name}:`, agentCount);

              return (
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
                  <span className="text-sm text-white">
                    {agentCount === "loading"
                      ? "Loading..."
                      : isNaN(agentCount as number)
                      ? "0 Agents"
                      : `${(agentCount as number).toFixed(0)} Agents`}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
