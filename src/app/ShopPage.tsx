import React, { useState } from "react";
import { items } from "../utils/items";

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4 bg-gray-900 text-white">
      {/* Category Selection Buttons */}
      <div className="flex justify-center mb-6 space-x-2">
        {["all", "plugin", "skill", "wisdom", "personality"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "bg-[#fd01f5] text-black"
                : "bg-gray-700"
            } text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Shop Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md border-2 border-accent1 hover:border-[#01fcfc] transition-colors"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-contain mb-4 rounded"
            />
            <h3 className="text-xl text-center">{item.name}</h3>
            <p className="text-center text-sm text-gray-400">{item.category}</p>

            {/* Approved Badge */}
            {item.type === "approved" && (
              <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
                Approved
              </div>
            )}

            <div className="mt-4 flex justify-center">
              <button className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
