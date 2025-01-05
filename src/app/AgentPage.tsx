import React from "react";
import { useParams } from "react-router-dom";
import ProgressCard from "../components/ProgressCard";
import EquipmentStore from "../components/EquipmentStore";
import ChatBox from "../components/ChatBox"; // Import ChatBox component

const agents = [
  { name: "Agent1", avatar: "/agents/1.png" },
  { name: "Agent2", avatar: "/agents/2.png" },
  { name: "Agent3", avatar: "/agents/3.png" },
  { name: "Agent4", avatar: "/agents/4.png" },
  { name: "Agent5", avatar: "/agents/5.png" },
  { name: "Agent6", avatar: "/agents/6.png" },
];

const AgentPage: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Get agent's name from the URL

  // Find the agent's data based on the name from the URL
  const agent = agents.find((agent) => agent.name === name);

  const walletBalance = 150.50; // Example wallet balance

  return (
    <div className="max-w-screen-lg mx-auto py-10 space-y-8">
      {/* Progress Card: Short and wide at the top */}
      <div className="bg-blue-900 p-6 rounded-lg shadow-lg text-center">
        <ProgressCard
          avatar={agent?.avatar || "/default-avatar.png"} // Fallback to a default avatar if not found
          username={name || "Agent"}
          rank={44}
          level={12}
          xp={{ current: 429, max: 1337 }}
          walletBalance={walletBalance} // Pass the wallet balance here
        />
      </div>

      {/* Chat Box: Full width with conversation above the input */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <ChatBox agentName={name || "the agent"} />
      </div>

      {/* Equipment Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-bold mb-4">Equipment</h2>

        {/* Left Column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Personality */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Personality</h3>
            <div className="flex gap-4">
              <div className="bg-blue-600 p-2 rounded-lg text-white flex-1">
                Personality Item 1
              </div>
            </div>
          </div>

          {/* Plugins */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Plugins</h3>
            <div className="grid grid-cols-5 gap-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-green-600 p-2 rounded-lg text-white">
                  Plugin {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Skills</h3>
            <div className="grid grid-cols-5 gap-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-red-600 p-2 rounded-lg text-white">
                  Skill {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Unused Inventory Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-bold mb-4">Unused Inventory</h2>

        {/* Unused Equipment Items */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-white">
              Unused Item {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Shop Section */}
      <div>
        <EquipmentStore />
      </div>
    </div>
  );
};

export default AgentPage;
