import React, { useState } from "react";
import CreatePersonalityForm from "./CreatePersonalityForm";
import PreviewPersonality from "./PreviewPersonality";
import ChatBox from "./ChatBox";

const CreatePersonality: React.FC = () => {
  const [personality, setPersonality] = useState({
    name: "",
    bio: "",
    lore: "",
    knowledge: "",
    messageExamples: [{ user: "", content: "" }],
    postExamples: "",
    topics: "",
    style: {
      all: "",
      chat: "",
      post: "",
    },
    adjectives: "",
  });

  return (
    <div className="flex space-x-8 p-8">
      {/* Left Side: Create Personality Form */}
      <div className="w-1/2">
        <CreatePersonalityForm
          personality={personality}
          setPersonality={setPersonality}
        />
      </div>

      {/* Right Side: ChatBox and Preview */}
      <div className="w-1/2 flex flex-col space-y-4">
        {/* ChatBox Above Preview */}
        <div className="flex-shrink-0">
          <ChatBox agentName={personality.name || "Agent"} />
        </div>

        {/* Preview Personality Below ChatBox */}
        <div className="flex-shrink-0">
          <PreviewPersonality personality={personality} />
        </div>
      </div>
    </div>
  );
};

export default CreatePersonality;
