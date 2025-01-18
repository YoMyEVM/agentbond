import React from "react";
import { useParams } from "react-router-dom";
import ItemDependencyTree from "../components/ItemDependencyTree"; // Import the correct tree component
import { items } from "../utils/items"; // Assuming we have an items array

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL params

  // Find the item by ID from the items list
  const item = items.find((item) => item.id === Number(id));

  // If item is not found, return a 404-style message
  if (!item) {
    return (
      <div className="p-6 bg-gray-900 text-white">
        <p>Item not found!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* Display the ItemDependencyTree and force re-render by passing key */}
      <ItemDependencyTree key={item.id} item={item} />
    </div>
  );
};

export default ItemPage;
