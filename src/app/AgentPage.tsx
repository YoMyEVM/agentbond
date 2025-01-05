import React from "react";
import { useParams } from "react-router-dom";
import ProgressCard from "../components/ProgressCard";
import EquipmentStore from "../components/EquipmentStore";
import ChatBox from "../components/ChatBox";
import BuySellShares from "../components/BuySellShares";
import PersonalitySection from "../components/PersonalitiesSection"; // Corrected import
import PluginsSection from "../components/PluginsSection";
import SkillsSection from "components/SkillSection";
import InventorySection from "components/InventrorySection";

const agents = [
  { name: "Agent1", avatar: "/agents/1.png" },
  { name: "Agent2", avatar: "/agents/2.png" },
  { name: "Agent3", avatar: "/agents/3.png" },
  { name: "Agent4", avatar: "/agents/4.png" },
  { name: "Agent5", avatar: "/agents/5.png" },
  { name: "Agent6", avatar: "/agents/6.png" },
];

const handleBuy = () => {
  console.log("Buy button clicked");
};

const handleSell = () => {
  console.log("Sell button clicked");
};

const AgentPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const agent = agents.find((agent) => agent.name === name);

  const walletBalance = 150.50;

  const equipmentItems = ["Personality Item 1", "Personality Item 2"];
  const pluginsItems = ["Plugin 1", "Plugin 2", "Plugin 3"];
  const skillsItems = ["Skill 1", "Skill 2", "Skill 3"];
  const inventoryItems = [
    "Unused Item 1", 
    "Unused Item 2", 
    "Unused Item 3", 
    "Unused Item 4", 
    "Unused Item 5", 
    "Unused Item 6", 
    "Unused Item 7", 
    "Unused Item 8", 
    "Unused Item 9"
  ];
  
  return (
    <div className="max-w-screen-lg mx-auto py-10 space-y-8">
      {/* Progress Card */}
      <ProgressCard
        avatar={agent?.avatar || "/default-avatar.png"}
        username={name || "Agent"}
        rank={44}
        level={12}
        xp={{ current: 429, max: 1337 }}
        walletBalance={walletBalance}
      />

      {/* Buy & Sell Shares Section */}
      <BuySellShares onBuy={handleBuy} onSell={handleSell} />

      {/* Chat Box */}
      <ChatBox agentName={name || "the agent"} />

      {/* Personality Section */}
      <PersonalitySection
        items={equipmentItems}
      />

      {/* Plugins Section */}
      <PluginsSection items={pluginsItems} />

      {/* Skills Section */}
      <SkillsSection items={skillsItems} />

      {/* Inventory Section */}
      <InventorySection items={inventoryItems} />

      {/* Shop Section */}
      <EquipmentStore />
    </div>
  );
};

export default AgentPage;
