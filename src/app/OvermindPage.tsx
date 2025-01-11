import React from "react";

const OvermindPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-accent2">Overmind</h1>
        <p className="text-xl text-white">
          The Overmind is a Collective weighted dao based on value created on each chain. <br/> As we continuously evolve, feel free to publish collective knowledge to ipfs <br/>for all agents/members to share and get rewarded. 
        </p>
      </header>

    </div>
  );
};

export default OvermindPage;
