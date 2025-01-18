import React, { useState } from "react";
import ItemParentCard from "./ItemParentCard"; // Import the ItemParentCard component
import ItemChildCard from "./ItemChildCard"; // Import the ItemChildCard component
import { Item, items } from "../utils/items"; // Import the items list

interface ItemDependencyTreeProps {
  item: Item;
}

const ItemDependencyTree: React.FC<ItemDependencyTreeProps> = ({ item }) => {
  const [showDependencies, setShowDependencies] = useState(false);

  // Store visibility of child dependencies
  const [visibleChildDependencies, setVisibleChildDependencies] = useState<{ [key: number]: boolean }>({});

  // Toggle dependencies for the parent
  const toggleParentDependencies = () => {
    setShowDependencies((prev) => !prev);
  };

  // Handle toggling dependencies for each child
  const toggleChildDependencies = (childId: number) => {
    setVisibleChildDependencies((prev) => {
      // If the clicked child is already open, close it, otherwise open it
      const newVisibility = { ...prev };
      if (newVisibility[childId]) {
        delete newVisibility[childId];
      } else {
        // Close all other child dependencies
        Object.keys(newVisibility).forEach((key) => {
          delete newVisibility[parseInt(key)];
        });
        newVisibility[childId] = true;
      }
      return newVisibility;
    });
  };

  // Fetch child items based on the dependencies in the parent item
  const childItems: (Item | null)[] = (item.dependencies ?? []).map((id) => {
    const childItem = items.find((i) => i.id === id);
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

  // Render the dependencies for each child, if they are visible
  const renderChildDependencies = (child: Item) => {
    const childDependencies = child.dependencies ?? [];
    return childDependencies.length > 0 ? (
      <div className="mt-4 flex justify-center gap-6">
        {childDependencies.map((depId) => {
          const depItem = items.find((item) => item.id === depId);
          return depItem ? (
            <ItemChildCard key={depItem.id} item={depItem} onToggleDependencies={() => {}} showDependencies={true} />
          ) : null;
        })}
      </div>
    ) : null;
  };

  return (
    <div className="p-6 bg-black rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        {/* Render the parent item card */}
        <ItemParentCard
          item={item}
          onToggleDependencies={toggleParentDependencies}
          showDependencies={showDependencies}
        />

        {/* Render child items if dependencies are visible */}
        {showDependencies && (
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {validChildItems.length > 0 ? (
              validChildItems.map((child) => {
                const isChildVisible = visibleChildDependencies[child.id];
                return (
                  <div key={child.id} className="flex flex-col items-center">
                    <ItemChildCard item={child} onToggleDependencies={() => toggleChildDependencies(child.id)} showDependencies={isChildVisible} />

                    {/* Render child dependencies if visible */}
                    {isChildVisible && renderChildDependencies(child)}
                  </div>
                );
              })
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
