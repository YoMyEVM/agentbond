import React from "react";
import ProtocolHorizontalBar from "../components/ProtocolHorizontalBar"; // Import the ProtocolHorizontalBar component
import ContractHorizontalBar from "./ContractHorizontalBar";

const CreateComplex: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
      {/* Add the ProtocolHorizontalBar directly below the description */}
      <ProtocolHorizontalBar />
      
      {/* Add the ContractHorizontalBar directly below the ProtocolHorizontalBar */}
      <div className="mt-0 mb-0"> {/* Set margins to 0 for both top and bottom */}
        <ContractHorizontalBar />
      </div>
    </div>
  );
};

export default CreateComplex;
