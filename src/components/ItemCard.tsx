import React from "react";
import { Item } from "../utils/items";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border-2 border-accent1 hover:border-[#01fcfc] transition-colors">
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

      <div className="mt-4 flex justify-center space-x-4">


        {/* Buy Now Button */}
        <button className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
