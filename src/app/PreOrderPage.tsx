import React from "react";
import PreOrderGroup from "../components/PreOrderGroup"; // Import the PreOrderGroup component

const PreOrderPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#000", // Dark background color
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh", // Ensure the container takes at least the full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Ensures content is aligned to the top
        alignItems: "center", // Center horizontally
      }}
    >
      {/* Directly render the PreOrderGroup component */}
      <PreOrderGroup />
    </div>
  );
};

export default PreOrderPage;
