import React from "react";
import ProtocolHorizontalBar from "../components/ProtocolHorizontalBar"; // Import the ProtocolHorizontalBar component

const CreateComplex: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
      {/* Add the ProtocolHorizontalBar directly below the description */}
      <ProtocolHorizontalBar />
    </div>
  );
};

export default CreateComplex;
