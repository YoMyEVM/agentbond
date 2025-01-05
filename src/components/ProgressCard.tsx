import React from "react";

interface ProgressCardProps {
  avatar: string;
  username: string;
  rank: number;
  level: number;
  xp: { current: number; max: number };
  walletBalance: number; // Adding wallet balance as a prop
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
    <div className="text-white space-y-4">
      {/* Avatar Section: Make the image larger and center it */}
      <div className="mb-4">
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-600 mx-auto" // Larger and centered avatar
        />
      </div>

      {/* Username Section */}
      <h2 className="text-white text-2xl font-bold">{username}</h2>

      {/* Level Section: Display level under the image */}
      <div className="text-gray-300 mt-2">Level {level}</div>

      {/* Rank Section */}
      <div className="text-gray-400 mt-2">RANK {rank}</div>

      {/* XP Progress Bar */}
      <div className="mt-4">
        <div className="relative w-full bg-gray-700 rounded-full h-4 mt-2">
          <div
            className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
            style={{ width: `${(xp.current / xp.max) * 100}%` }}
          ></div>
        </div>
        <p className="text-right text-gray-300 mt-1">
          {xp.current} / {xp.max} XP
        </p>
      </div>

      {/* Wallet Balance Section: Display the wallet balance */}
      <div className="mt-4">
        <div className="text-white font-semibold">Wallet Balance</div>
        <div className="text-green-400 text-xl">${walletBalance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProgressCard;
