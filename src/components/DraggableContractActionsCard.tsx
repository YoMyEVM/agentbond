import { useDrag } from "react-dnd";
import { Action } from "../types/types"; // Import Action type

const DraggableContractActionCard: React.FC<{ action: Action }> = ({ action }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "action", // Identifying this item as a "action"
    item: action, // The item being dragged
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-gray-700 p-4 rounded-lg mb-4 ${isDragging ? "opacity-50" : ""}`}
      style={{ cursor: "move" }}
    >
      <h3 className="text-white text-lg">{action.name}</h3>
      <p className="text-white text-sm">{action.description}</p>
    </div>
  );
};

export default DraggableContractActionCard;
