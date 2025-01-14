import React, { useState } from "react";
import { protocols, Protocol } from "../utils/protocols"; // Ensure you're importing the protocols array

const ProtocolHorizontalBar = () => {
  // State to track the current index of visible protocols
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxItemsPerView = 8; // Maximum items to show in a view

  // Function to go to the next set of protocols
  const nextProtocols = () => {
    if (currentIndex + maxItemsPerView < protocols.length) {
      setCurrentIndex(currentIndex + maxItemsPerView);
    }
  };

  // Function to go to the previous set of protocols
  const prevProtocols = () => {
    if (currentIndex - maxItemsPerView >= 0) {
      setCurrentIndex(currentIndex - maxItemsPerView);
    }
  };

  // Get the protocols for the current view
  const displayedProtocols = protocols.slice(currentIndex, currentIndex + maxItemsPerView);

  return (
    <div className="py-6">
      {/* Horizontal Bar */}
      <div className="flex items-center justify-between px-4 mb-4">
        {/* Left Arrow */}
        <button
          onClick={prevProtocols}
          disabled={currentIndex === 0}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50 mr-4" // Add margin to move outward
        >
          &#8592; {/* Left Arrow */}
        </button>

        {/* Flexbox for Protocol Cards */}
        <div className="flex gap-1 overflow-hidden">
          {displayedProtocols.map((protocol: Protocol) => (
            <div
              key={protocol.id}
              className="flex flex-row items-center justify-center text-center bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg"
              style={{ minWidth: "100px" }} // Set a minimum width to ensure cards fit
            >
              <img
                src={protocol.image || "default-image-url"} // Fallback image URL if not provided
                alt={protocol.name}
                className="w-5 h-5 mr-2 rounded-full" // Logo size of 20x20 px
              />
              <span className="text-white font-bold text-sm">{protocol.name}</span> {/* Adjust font size */}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextProtocols}
          disabled={currentIndex + maxItemsPerView >= protocols.length}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50 ml-4" // Add margin to move outward
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default ProtocolHorizontalBar;
