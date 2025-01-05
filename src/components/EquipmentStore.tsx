import React, { useState } from "react";

const EquipmentStore: React.FC = () => {
  const [inventory, setInventory] = useState<string[]>([]); // Track equipped items
  const [currency, setCurrency] = useState(100); // Track user's currency (example)

  // Example items for the shop
  const shopItems = [
    { id: 1, name: "Personality", price: 30, type: "equipment" },
    { id: 2, name: "Personality", price: 40, type: "equipment" },
  ];

  // Example skills and plugins
  const skillsAndPlugins = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Skill/Plugin ${i + 1}`,
    price: 10 + i * 5,
  }));

  const equipItem = (item: string) => {
    setInventory((prev) => [...prev, item]);
  };

  const buyItem = (item: { name: string; price: number }) => {
    if (currency >= item.price) {
      setCurrency(currency - item.price);
      equipItem(item.name);
    } else {
      alert("Not enough currency!");
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-white text-lg font-bold mb-4">Shop</h3>
      <div className="grid grid-cols-3 gap-4">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg text-center text-white"
          >
            <div>{item.name}</div>
            <div>{`Price: ${item.price} Coins`}</div>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
            >
              Buy
            </button>
          </div>
        ))}
        <div className="bg-gray-800 p-4 rounded-lg text-center text-white">
          <button className="text-xl text-green-500">+</button> {/* Add more items */}
        </div>
      </div>

      <h3 className="text-white text-lg font-bold my-4">Skills and Plugins</h3>
      <div className="grid grid-cols-4 gap-4">
        {skillsAndPlugins.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg text-center text-white"
          >
            <div>{item.name}</div>
            <div>{`Price: ${item.price} Coins`}</div>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-white text-lg font-bold">Your Inventory</h3>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {inventory.map((item, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-center text-white">
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EquipmentStore;
