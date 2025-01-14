import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";

// TransactionBuilder component
const TransactionBuilder: React.FC = () => {
  const [transactionActions, setTransactionActions] = useState<any[]>([]);

  // Handle action drop into the builder
  const [, drop] = useDrop(() => ({
    accept: "action",
    drop: (item: any) => {
      setTransactionActions((prevActions) => [
        ...prevActions,
        item.action, // Add the dropped action to the list
      ]);
    },
  }));

  // Handle removing an action
  const handleRemoveAction = (index: number) => {
    setTransactionActions((prevActions) =>
      prevActions.filter((_, idx) => idx !== index)
    );
  };

  // Handle dragging and reordering actions within the builder
  const moveAction = (dragIndex: number, hoverIndex: number) => {
    const draggedAction = transactionActions[dragIndex];
    const updatedActions = [...transactionActions];
    updatedActions.splice(dragIndex, 1);
    updatedActions.splice(hoverIndex, 0, draggedAction);
    setTransactionActions(updatedActions);
  };

  return (
    <div ref={drop} className="h-full bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-white text-lg mb-4">Transaction Builder</h3>

      <div className="bg-gray-600 p-4 rounded-lg min-h-[200px]">
        {transactionActions.length === 0 ? (
          <p className="text-white">Drag actions here to build a transaction.</p>
        ) : (
          <div>
            <h4 className="text-white">Current Actions:</h4>
            <ul className="text-white">
              {transactionActions.map((action, idx) => (
                <DraggableActionCard
                  key={idx}
                  index={idx}
                  action={action}
                  removeAction={handleRemoveAction}
                  moveAction={moveAction}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// DraggableActionCard component to render each action
const DraggableActionCard: React.FC<{
  action: any;
  index: number;
  removeAction: (index: number) => void;
  moveAction: (dragIndex: number, hoverIndex: number) => void;
}> = ({ action, index, removeAction, moveAction }) => {
  const [, drag] = useDrag(() => ({
    type: "action",
    item: { index },
  }));

  const [, drop] = useDrop(() => ({
    accept: "action",
    hover: (item: any) => {
      if (item.index !== index) {
        moveAction(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <li
      ref={(node) => drag(drop(node))}
      className="flex items-center justify-between bg-gray-700 p-4 rounded-lg mb-2"
    >
      <div>
        <h5 className="text-white text-lg">{action.name}</h5>
        <p className="text-white text-sm">{action.description}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => removeAction(index)}
      >
        <span className="text-xl">×</span> {/* Red X */}
      </button>
    </li>
  );
};

export default TransactionBuilder;
