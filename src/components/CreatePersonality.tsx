import React, { useState } from "react";
import CreatePersonalityForm from "./CreatePersonalityForm";
import PreviewPersonality from "./PreviewPersonality";

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
      <div className="w-1/2">
        <CreatePersonalityForm
          personality={personality}
          setPersonality={setPersonality}
        />
      </div>
      <div className="w-1/2">
        <PreviewPersonality personality={personality} />
      </div>
    </div>
  );
};

export default CreatePersonality;
