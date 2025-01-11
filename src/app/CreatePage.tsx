// CreatePage.tsx
import React, { useState } from "react";
import CreatePersonality from "components/CreatePersonality";
import CreatePlugin from "components/CreatePlugin";
import CreateSkill from "components/CreateSkill";

const CreatePage: React.FC = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState<string>("personality");

  // Function to handle category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-14">
        Create and Sell AI Attributes
      </h1>
      <p className="text-3xl text-gray-300 mt-4">
        Craft the unique personality, traits, and abilities of your AI Brain.
      </p>

      {/* Category toggle buttons */}
      <div className="mt-6 mb-8">
        <button
          onClick={() => handleCategoryChange("personality")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeCategory === "personality"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Personality
        </button>
        <button
          onClick={() => handleCategoryChange("plugin")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeCategory === "plugin" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Web2 Plugin
        </button>
        <button
          onClick={() => handleCategoryChange("skill")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeCategory === "skill" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Web3 Skill
        </button>
      </div>

      {/* Conditionally render components based on active category */}
      {activeCategory === "personality" && <CreatePersonality />}
      {activeCategory === "plugin" && <CreatePlugin />}
      {activeCategory === "skill" && <CreateSkill />}
    </section>
  );
};

export default CreatePage;
