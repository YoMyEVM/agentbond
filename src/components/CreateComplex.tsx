import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Action } from "../types/types";
import { contracts } from "../utils/contracts";
import { protocols } from "../utils/protocols";
import DraggableContractActionCard from "./DraggableContractActionsCard";

const CreateComplex: React.FC = () => {
  const [selectedProtocol, setSelectedProtocol] = useState<number | null>(null);
  const [selectedContract, setSelectedContract] = useState<number | null>(null);
  const [actionsInTransaction, setActionsInTransaction] = useState<Action[]>([]);

  const handleAddActionToTransaction = (action: Action) => {
    setActionsInTransaction((prevActions) => [...prevActions, action]);
  };

  const handleRemoveAction = (index: number) => {
    setActionsInTransaction((prevActions) =>
      prevActions.filter((_, idx) => idx !== index)
    );
  };

  const handleMoveAction = (index: number, direction: "up" | "down") => {
    setActionsInTransaction((prevActions) => {
      const newActions = [...prevActions];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex >= 0 && targetIndex < newActions.length) {
        [newActions[index], newActions[targetIndex]] = [
          newActions[targetIndex],
          newActions[index],
        ];
      }
      return newActions;
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "action",
    drop: (item: { action: Action }) => handleAddActionToTransaction(item.action),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
      <div className="flex justify-between mb-4">
        <h2 className="text-accent2 text-xl w-1/4 text-center mx-auto">Contract Actions</h2>
        <h2 className="text-accent2 text-xl w-1/4 text-center mx-auto">Transaction Builder</h2>
      </div>
      <div className="flex gap-4">
        {/* Contract Actions */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-md">
          {/* Protocol Selection */}
          <div className="mb-4">
            <label className="text-accent1">Select Protocol:</label>
            <select
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={selectedProtocol || ""}
              onChange={(e) => setSelectedProtocol(Number(e.target.value))}
            >
              <option value="">-- Select Protocol --</option>
              {protocols.map((protocol) => (
                <option key={protocol.id} value={protocol.id}>
                  {protocol.name}
                </option>
              ))}
            </select>
          </div>

          {/* Contract Selection */}
          <div className="mb-4">
            <label className="text-accent1">Select Contract:</label>
            <select
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={selectedContract || ""}
              onChange={(e) => setSelectedContract(Number(e.target.value))}
            >
              <option value="">-- Select Contract --</option>
              {contracts.map((contract) => (
                <option key={contract.id} value={contract.id}>
                  {contract.name} (Address: {contract.address})
                </option>
              ))}
            </select>
          </div>

          {/* Render Draggable Contract Action Cards */}
          {selectedProtocol && selectedContract ? (
            protocols
              .filter((protocol) => protocol.id === selectedProtocol)
              .flatMap((protocol) =>
                contracts
                  .filter((contract) => contract.id === selectedContract)
                  .map((contract) => (
                  <DraggableContractActionCard
                    key={`${protocol.id}-${contract.id}`}
                    action={{
                      id: `${protocol.id}-${contract.id}`,
                      name: `${protocol.name} - ${contract.name}`,
                      description: `${protocol.description} for contract ${contract.name}`,
                      image: protocol.image, // Pass protocol logo to the card
                    }}
                  />

                  ))
              )
          ) : (
            <p className="text-white">Select a protocol and contract to see actions.</p>
          )}
        </div>

        {/* Transaction Builder */}
        <div
          ref={drop}
          className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-md"
          style={{ backgroundColor: isOver ? "rgba(0, 255, 255, 0.2)" : "transparent" }}
        >
          {actionsInTransaction.length > 0 ? (
            <ul className="space-y-4">
              {actionsInTransaction.map((action, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-white text-lg">{action.name}</h3>
                    <p className="text-white text-sm">{action.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      className={`text-white bg-gray-600 p-1 rounded hover:bg-gray-500 ${
                        index === 0 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => handleMoveAction(index, "up")}
                      disabled={index === 0}
                    >
                      ↑
                    </button>
                    <button
                      className="text-red-500 bg-gray-600 p-1 rounded hover:bg-gray-500"
                      onClick={() => handleRemoveAction(index)}
                    >
                      ×
                    </button>
                    <button
                      className={`text-white bg-gray-600 p-1 rounded hover:bg-gray-500 ${
                        index === actionsInTransaction.length - 1
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleMoveAction(index, "down")}
                      disabled={index === actionsInTransaction.length - 1}
                    >
                      ↓
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">Drag actions here to build a transaction.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateComplex;
