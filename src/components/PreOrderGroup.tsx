import React from "react";
import PreOrderCard from "./PreOrderCard";
import { chains } from "../utils/chains"; // Adjust the path to your chains array

const PreOrderGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-0 bg-black min-h-screen">
      {/* Render PreOrderCards for each chain */}
      {chains.slice(0, 8).map((chain, index) => (
        <PreOrderCard key={index} chain={{ ...chain, id: chain.id.toString() }} /> // Ensure `id` is a string
      ))}
    </div>
  );
};

export default PreOrderGroup;
