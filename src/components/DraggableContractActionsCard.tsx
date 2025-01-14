import React from "react";
import { useDrag } from "react-dnd";

const DraggableContractActionCard: React.FC<{ action: any }> = ({ action }) => {
  const [, drag] = useDrag(() => ({
    type: "action", 
    item: { action },
  }));

  return (
    <div
      ref={drag}
      className="bg-gray-700 p-4 rounded-lg mb-4"
      style={{ cursor: "move" }}
    >
      <h3 className="text-white text-lg">{action.name}</h3>
      <p className="text-white text-sm">{action.description}</p>
    </div>
  );
};

export default DraggableContractActionCard;
