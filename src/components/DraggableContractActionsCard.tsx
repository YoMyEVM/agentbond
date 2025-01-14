import React from "react";
import { useDrag } from "react-dnd";
import { Action } from "../types/types";

const DraggableContractActionCard: React.FC<{ action: Action }> = ({ action }) => {
  const [, drag] = useDrag(() => ({
    type: "action",
    item: { action }, // Pass the entire action object
  }));

  return (
    <div
      ref={drag}
      className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md"
      style={{ cursor: "grab" }}
    >
      <h3 className="text-white text-lg">{action.name}</h3>
      <p className="text-white text-sm">{action.description}</p>
    </div>
  );
};

export default DraggableContractActionCard;
