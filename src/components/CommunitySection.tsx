import React, { useState } from "react";

const CommunitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg">
      <h2 className="text-3xl font-bold text-[#fd01f5]">Community</h2>
      
      <div className="mt-4">
        {/* Tabs for Chat and Voting */}
        <div className="flex space-x-8">
          <button
            className={`py-2 px-4 font-semibold text-lg ${activeTab === "chat" ? "text-[#fd01f5] border-b-2 border-[#fd01f5]" : "text-gray-400"}`}
            onClick={() => setActiveTab("chat")}
          >
            Chat
          </button>
          <button
            className={`py-2 px-4 font-semibold text-lg ${activeTab === "voting" ? "text-[#fd01f5] border-b-2 border-[#fd01f5]" : "text-gray-400"}`}
            onClick={() => setActiveTab("voting")}
          >
            Voting
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "chat" && (
            <div className="text-gray-400">
              <p>Placeholder for Chat section. Users can interact here.</p>
            </div>
          )}
          {activeTab === "voting" && (
            <div className="text-gray-400">
              <p>Placeholder for Voting section. Users can vote on proposals here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
