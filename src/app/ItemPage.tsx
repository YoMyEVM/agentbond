import React from "react";
import { useParams } from "react-router-dom";
import ComponentDependencyTree from "../components/ComponentDependencyTree"; // Correct import for the tree
import { Item } from "../utils/items"; // Correct import for Item type

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL parameters

  // Fetch item details based on ID
  const item: Item = {
    id: Number(id), // Parse ID to number
    name: `Component ${id}`,
    category: `Category ${id}`,
    image: "https://via.placeholder.com/100",
    type: "Type X",
    dependencies: [1, 2], // Example dependencies for this item
  };

  return (
    <div className="p-6 bg-gray-900 text-white">


      {/* Add the ComponentDependencyTree below the image and description */}
      <ComponentDependencyTree item={item} /> {/* Passing 'item' to the tree */}

      {/* Buy Now Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
