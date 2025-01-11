// ShopPage.tsx
import React, { useState } from "react";
import PersonalityItems from "components/PersonalityItems";
import PluginItems from "components/PluginItems";
import SkillItems from "../components/SkillItems";

const ShopPage: React.FC = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState<string>("personality");

  // Function to handle category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">Shop</h1>
      <p className="text-3xl text-gray-300 mt-4">
        Explore and buy amazing items here!
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
          Personalities
        </button>
        <button
          onClick={() => handleCategoryChange("plugin")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeCategory === "plugin" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Web2 Plugins
        </button>
        <button
          onClick={() => handleCategoryChange("skill")}
          className={`px-6 py-2 mx-2 text-lg rounded ${
            activeCategory === "skill" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Web3 Skills
        </button>
      </div>

      {/* Conditionally render components based on active category */}
      {activeCategory === "personality" && <PersonalityItems />}
      {activeCategory === "plugin" && <PluginItems />}
      {activeCategory === "skill" && <SkillItems />}
    </section>
  );
};

export default ShopPage;
