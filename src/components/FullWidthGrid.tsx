import React from "react";

const FullWidthGrid: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-white text-lg font-bold mb-4">Equip</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg text-center text-white">Card 1</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center text-white">Card 2</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center text-white">+</div>
      </div>
      <h3 className="text-white text-lg font-bold my-4">Skills and Plugins</h3>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg text-center text-white">
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullWidthGrid;
