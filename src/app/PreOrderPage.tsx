// PreOrderPage.tsx
import React, { useState } from "react";
import PreOrderTable from "../components/PreOrderTable"; // Import the PreOrderTable component
import PreOrderAboutPage from "../components/PreOrderAbout"; // Import the PreOrderAboutPage component

const PreOrderPage: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("table");

  // Function to handle page changes
  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  return (
    <div
      style={{
        backgroundColor: "#101010", // Dark background color
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2rem",
          color: "#fd01f5", // Accent color for title
        }}
      >
        Pre-Order your ISAI Agent NFT
      </h1>

      {/* Category toggle buttons */}
      <div className="mt-6 mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handlePageChange("table")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activePage === "table"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Pre-Order
        </button>
        <button
          onClick={() => handlePageChange("about")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activePage === "about" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          About
        </button>
      </div>

      {/* Conditionally render components based on active page */}
      {activePage === "table" && <PreOrderTable />}
      {activePage === "about" && <PreOrderAboutPage />}
    </div>
  );
};

export default PreOrderPage;
