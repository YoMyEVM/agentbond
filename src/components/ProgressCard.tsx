import React from "react";

interface ProgressCardProps {
  avatar: string;
  username: string;
  rank: number;
  level: number;
  xp: { current: number; max: number }; // Updated to expect an object
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  avatar,
  username,
  rank,
  level,
  xp,
}) => {
  return (
    <div className="text-white space-y-4">
      <div className="flex items-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-600"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="text-sm text-gray-300">Level {level}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">RANK {rank}</p>
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
    </div>
  );
};

export default ProgressCard;
