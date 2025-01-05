import React from "react";

interface ProgressCardProps {
  avatar: string;
  username: string;
  rank: number;
  level: number;
  xp: { current: number; max: number };
  walletBalance: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  avatar,
  username,
  rank,
  level,
  xp,
  walletBalance,
}) => {
  return (
    <div className="text-white flex flex-col items-center">
      {/* Profile Info Row */}
      <div className="flex items-center justify-between w-full px-6 mb-4">
        {/* Avatar and Username */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-600"
          />
          <div>
            <h2 className="text-xl font-bold">{username}</h2>
            <p className="text-green-400 text-lg">Rank: #{rank}</p>
          </div>
        </div>
        {/* Wallet Balance */}
        <div className="text-lg font-semibold text-green-400">
          Wallet: ${walletBalance.toFixed(2)}
        </div>
      </div>

      {/* XP Progress */}
      <div className="w-full px-6">
        <div className="relative w-full bg-gray-700 rounded-full h-4">
          <div
            className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
            style={{ width: `${(xp.current / xp.max) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-300 mt-1 text-sm">
          <span>Level {level}</span>
          <span>
            {xp.current} / {xp.max} XP
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
