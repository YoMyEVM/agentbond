import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Action } from "../types/types"; // Import Action type
import { contracts } from "../utils/contracts"; // Import contracts from utils/contracts.ts
import { protocols } from "../utils/protocols"; // Import protocols from utils/protocols.ts
import DraggableContractActionCard from "./DraggableContractActionsCard";// Import draggable card component

const CreateComplex: React.FC = () => {
  const [selectedProtocol, setSelectedProtocol] = useState<number | null>(null);
  const [selectedContract, setSelectedContract] = useState<number | null>(null);
  const [actionsInTransaction, setActionsInTransaction] = useState<Action[]>([]);

  const handleAddActionToTransaction = (action: Action) => {
    setActionsInTransaction((prevActions) => [...prevActions, action]);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "action",
    drop: (item: Action) => handleAddActionToTransaction(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
      <div className="flex gap-4">
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-white text-xl mb-4">Contract Actions</h2>

          {/* Protocol Selection */}
          <div className="mb-4">
            <label className="text-white">Select Protocol:</label>
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
            <label className="text-white">Select Contract:</label>
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
              .map((protocol) =>
                contracts
                  .filter((contract) => contract.id === selectedContract)
                  .map((contract) => (
                    <DraggableContractActionCard
                      key={`${protocol.id}-${contract.id}`} // Use a unique key
                      action={{
                        id: `${protocol.id}-${contract.id}`, // Combine IDs as strings
                        name: `${protocol.name} - ${contract.name}`,
                        description: `${protocol.description} for contract ${contract.name}`,
                      }}
                    />
                  ))
              )
          ) : (
            <p className="text-white">Select a protocol and contract to see actions.</p>
          )}
        </div>

        <div
          ref={drop}
          className="w-1/2 bg-gray-800 p-4 rounded-lg shadow-md"
          style={{ backgroundColor: isOver ? "rgba(0, 255, 255, 0.2)" : "transparent" }}
        >
          <h2 className="text-white text-xl mb-4">Transaction Builder</h2>

          <div>
            {actionsInTransaction.length > 0 ? (
              actionsInTransaction.map((action, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                  <h3 className="text-white text-lg">{action.name}</h3>
                  <p className="text-white text-sm">{action.description}</p>
                </div>
              ))
            ) : (
              <p className="text-white">Drag actions here to build a transaction.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComplex;
