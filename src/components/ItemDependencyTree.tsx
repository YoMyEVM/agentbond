import React, { useState } from "react";
import ItemParentCard from "./ItemParentCard"; // Import the ItemParentCard component
import ItemChildCard from "./ItemChildCard"; // Import the ItemChildCard component
import { Item, items } from "../utils/items"; // Import the items list

interface ItemDependencyTreeProps {
  item: Item;
}

const ItemDependencyTree: React.FC<ItemDependencyTreeProps> = ({ item }) => {
  const [showDependencies, setShowDependencies] = useState(false);

  const toggleDependencies = () => {
    setShowDependencies((prev) => !prev);
  };

  // Fetch child items based on the dependencies in the parent item
  const childItems: (Item | null)[] = (item.dependencies ?? []).map((id) => {
    // Find the actual child item based on the id from the items list
    const childItem = items.find((i) => i.id === id);
    
    // If a child item exists, return it, otherwise return null
    return childItem
      ? {
          id: childItem.id,
          name: childItem.name,
          category: childItem.category,
          image: childItem.image,
          type: childItem.type,
          dependencies: childItem.dependencies ?? [], // Ensure dependencies is always an array
        }
      : null;
  });

  // Filter out nulls from childItems and ensure the type is narrowed to only valid Item objects
  const validChildItems: Item[] = childItems.filter((child): child is Item => child !== null);

  console.log('Valid Child Items:', validChildItems); // Log child items to verify the image URLs

  return (
    <div className="p-6 bg-black rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        {/* Render the parent item card */}
        <ItemParentCard
          item={item}
          onToggleDependencies={toggleDependencies}
          showDependencies={showDependencies}
        />

        {/* Render child items if dependencies are visible */}
        {showDependencies && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {validChildItems.length > 0 ? (
              validChildItems.map((child) => (
                <div key={child.id} className="flex justify-center">
                  <ItemChildCard item={child} onToggleDependencies={() => {}} showDependencies={false} />
                </div>
              ))
            ) : (
              <p className="text-white">No dependencies available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDependencyTree;
