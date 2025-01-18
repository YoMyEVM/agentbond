import React from "react";
import { items, Item } from "../utils/items"; // Import items and Item type
import DependencyCard from "./DependencyCard"; // Import DependencyCard
import './ComponentDependencyTree.css'; // Import the CSS file

// Define props for ComponentDependencyTree component
interface ComponentDependencyTreeProps {
  item: Item; // Expecting an item prop
}

const ComponentDependencyTree: React.FC<ComponentDependencyTreeProps> = ({ item }) => {
  // Function to render the parent and its children
  const renderChildren = (parentItem: Item) => {
    return (
      <div className="flex flex-col items-center gap-4">
        {/* Render the parent node */}
        <div className="parent-node">
          <DependencyCard item={parentItem} />
        </div>

        {/* Render children nodes (if they exist) */}
        <div className="children-container flex justify-center gap-6">
          {parentItem.dependencies?.map((depId: number) => {
            const depItem = items.find((i: Item) => i.id === depId); // Find the dependent item
            return depItem ? (
              <div key={depItem.id} className="child-node">
                <DependencyCard item={depItem} />
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center mt-6" style={{ height: "100vh" }}>
      <div className="dependency-tree-container">
        {renderChildren(item)}
      </div>
    </div>
  );
};

export default ComponentDependencyTree;
