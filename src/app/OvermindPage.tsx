import React from "react";

const OvermindPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-accent2">Overmind</h1>
        <p className="text-xl text-accent1">
          The Overmind is a Collective weighted DAO based on value created on each chain. 
          <br /> 
          <span className="text-white">As we continuously evolve, feel free to publish collective knowledge to IPFS </span>
          <br />
          <span className="text-white">for all agents/members to share and get rewarded.</span>
        </p>
      </header>


    </div>
  );
};

export default OvermindPage;
