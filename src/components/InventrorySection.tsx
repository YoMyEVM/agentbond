import React from 'react';

interface InventorySectionProps {
  items: string[];
}

const InventorySection: React.FC<InventorySectionProps> = ({ items }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4 text-[#fd01f5]">Unused Inventory</h2>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg text-white hover:scale-105 transition-all duration-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventorySection;
