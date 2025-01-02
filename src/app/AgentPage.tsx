import React from "react";
import { useParams } from "react-router-dom";
import ProgressCard from "../components/ProgressCard"; // Ensure this file exists and is properly exported
import FullWidthGrid from "../components/FullWidthGrid"; // Ensure this file exists and is properly exported
import AgentProfileRow from "../components/AgentProfileRow"; // Import the AgentProfileRow component

const AgentPage: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Get agent's name from the URL

  return (
    <div className="text-center max-w-screen-lg mx-auto py-10 space-y-8">
      {/* Agent Profile Row */}
      <AgentProfileRow />

      {/* Progress Card and Chat Side-by-Side */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side: Progress Card */}
        <div className="flex-1 bg-blue-900 p-6 rounded-lg shadow-lg">
          <ProgressCard
            avatar="https://cdn.discordapp.com/avatars/127563346944851969/4793d22e3e53f6c8a239da7bc6b42fa6.png"
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

      {/* Full Width Grid */}
      <div>
        <FullWidthGrid />
      </div>
    </div>
  );
};

export default AgentPage;
