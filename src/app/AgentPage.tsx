import React from "react";
import { useParams } from "react-router-dom";
import ProgressCard from "../components/ProgressCard";
import EquipmentStore from "../components/EquipmentStore";

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

  return (
    <div className="text-center max-w-screen-lg mx-auto py-10 space-y-8">
      {/* Progress Card and Chat Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side: Progress Card */}
        <div className="flex-1 bg-blue-900 p-6 rounded-lg shadow-lg">
          <ProgressCard
            avatar={agent?.avatar || "/default-avatar.png"} // Fallback to a default avatar if not found
            username={name || "Agent"}
            rank={44}
            level={12}
            xp={{ current: 429, max: 1337 }}
          />
        </div>

        {/* Right Side: Chat Box */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-white text-lg font-bold mb-2">Chat</h2>
          <p className="text-gray-300 text-sm">Interact with {name || "the agent"}</p>
          <div className="mt-4">
            <textarea
              className="w-full h-32 p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
              placeholder="Type your message..."
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400">
              Send
            </button>
          </div>
        </div>
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
                {/* Example of Personality item */}
                Personality Item 1
              </div>
            </div>
          </div>

          {/* Plugins */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Plugins</h3>
            <div className="grid grid-cols-5 gap-4">
              {/* Example of Plugin items */}
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
              {/* Example of Skill items */}
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
          {/* Example of unused items */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-white">
              Unused Item {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Grid */}
      <div>
        <EquipmentStore />
      </div>
    </div>
  );
};

export default AgentPage;
