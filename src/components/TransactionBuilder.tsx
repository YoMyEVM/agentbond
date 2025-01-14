// TransactionBuilder.tsx
import React, { useState } from "react";
import { useDrop } from "react-dnd";

const TransactionBuilder: React.FC = () => {
  const [transactionActions, setTransactionActions] = useState<any[]>([]);

  const [, drop] = useDrop(() => ({
    accept: "action", // Accept the dragged action
    drop: (item: any) => {
      setTransactionActions((prevActions) => [
        ...prevActions,
        item.action, // Add the dropped action to the list
      ]);
    },
  }));

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
                <li key={idx}>{action.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionBuilder;
