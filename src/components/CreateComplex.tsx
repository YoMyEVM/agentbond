import React from "react";
import ProtocolHorizontalBar from "../components/ProtocolHorizontalBar"; // Import the ProtocolHorizontalBar component

const CreateComplex: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
      <h2 className="text-3xl font-bold text-[#fd01f5]">Create Complex</h2>

      {/* Add the ProtocolHorizontalBar below the description */}
      <div className="mt-8">
        <ProtocolHorizontalBar />
      </div>
    </div>
  );
};

export default CreateComplex;
