import React from "react";
import ItemCard from "./ItemCard"; // Import the ItemCard component
import { Item } from "../utils/items";

interface ItemDependencyTreeProps {
  item: Item;
}

const ItemDependencyTree: React.FC<ItemDependencyTreeProps> = ({ item }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        {/* Render the item card */}
        <ItemCard item={item} />
      </div>
    </div>
  );
};

export default ItemDependencyTree;
