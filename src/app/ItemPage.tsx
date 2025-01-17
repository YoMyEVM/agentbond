// src/pages/ItemPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Use id to fetch item details

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl text-center mb-4">Item Details</h2>
      <p className="text-center text-xl">Item ID: {id}</p>
      {/* Here you can fetch and display detailed information based on the item ID */}
      <div className="flex justify-center mt-4">
        <button className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
