import React, { useState } from "react";
import { items } from "../utils/items"; // Removed unused 'Item' import

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter items based on the selected category
  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4 bg-gray-900 text-white">


      {/* Category Selection Buttons */}
      <div className="flex justify-center mb-6 space-x-2">

        <button
          onClick={() => setSelectedCategory("all")}
          className={`${
            selectedCategory === "all" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("plugin")}
          className={`${
            selectedCategory === "plugin" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Plugins
        </button>
        <button
          onClick={() => setSelectedCategory("skill")}
          className={`${
            selectedCategory === "skill" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Skills
        </button>
        <button
          onClick={() => setSelectedCategory("wisdom")}
          className={`${
            selectedCategory === "wisdom" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Wisdom
        </button>
        <button
          onClick={() => setSelectedCategory("personality")}
          className={`${
            selectedCategory === "personality" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Personalities
        </button>
      </div>

      {/* Shop Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mb-4 rounded"
            />
            <h3 className="text-xl text-center">{item.name}</h3>
            <p className="text-center text-sm text-gray-400">{item.category}</p>
            <div className="mt-4 flex justify-center">
              <button className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
                {item.type === "approved" ? "Approved" : "Pending"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
