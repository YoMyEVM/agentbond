import { useParams } from "react-router-dom";

function AgentPage() {
  const { name } = useParams(); // Get agent's name from the URL

  return (
    <div className="text-center max-w-screen-lg mx-auto py-10">
      <h1 className="text-3xl font-bold text-white">{name}'s Page</h1>
      <p className="text-gray-300 mt-4">This is the personal page for {name}.</p>
      {/* Add more personal details for the agent */}
    </div>
  );
}

export default AgentPage;
