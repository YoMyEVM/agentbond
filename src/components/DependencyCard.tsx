import React from "react";
import { Item } from "../utils/items"; // Correct relative path

// Props for DependencyCard component
interface DependencyCardProps {
  item: Item;
  children?: Item[];  // Optional children prop for dependencies
}

// DependencyCard Component
const DependencyCard: React.FC<DependencyCardProps> = ({ item, children }) => {
  return (
    <div
      className="border p-4 rounded-md shadow-lg w-48 text-center"
      style={{ borderColor: "#69b3a2" }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 mx-auto mb-2 rounded-full"
      />
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="text-xs text-gray-400">{item.type}</p>
      <p className="text-xs text-gray-300">ID: {item.id}</p>

      {/* Displaying children if they exist */}
      {children && children.length > 0 && (
        <div className="mt-2 text-xs text-gray-600">
          <strong>Dependencies:</strong>
          <ul className="list-disc pl-4">
            {children.map(child => (
              <li key={child.id}>{child.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DependencyCard;
