import React, { useState } from "react";
import { protocols, Protocol } from "../utils/protocols"; // Ensure you're importing the protocols array

const ProtocolHorizontalBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxItemsPerView = 8;

  const nextProtocols = () => {
    if (currentIndex + maxItemsPerView < protocols.length) {
      setCurrentIndex(currentIndex + maxItemsPerView);
    }
  };

  const prevProtocols = () => {
    if (currentIndex - maxItemsPerView >= 0) {
      setCurrentIndex(currentIndex - maxItemsPerView);
    }
  };

  const displayedProtocols = protocols.slice(currentIndex, currentIndex + maxItemsPerView);

  return (
    <div className="py-0"> {/* Set padding to 0 */}
      <div className="flex items-center justify-between px-4 mb-0">
        <button
          onClick={prevProtocols}
          disabled={currentIndex === 0}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50 mr-4"
        >
          &#8592;
        </button>

        <div className="flex gap-1 overflow-hidden">
          {displayedProtocols.map((protocol: Protocol) => (
            <div
              key={protocol.id}
              className="flex flex-row items-center justify-center text-center bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg"
              style={{ minWidth: "100px" }}
            >
              <span className="text-white font-bold text-sm">{protocol.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={nextProtocols}
          disabled={currentIndex + maxItemsPerView >= protocols.length}
          className="bg-gray-800 text-white p-2 rounded-md disabled:opacity-50 ml-4"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ProtocolHorizontalBar;
