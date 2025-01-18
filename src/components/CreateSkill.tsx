import React, { useState } from "react";
import CreateSkillForm from "./CreateSkillForm";
import PreviewSkill from "./PreviewSkill";

const CreateSkill: React.FC = () => {
  const [skillData, setSkillData] = useState<{
    name: string;
    contractAddress: string;
    abi: string;
  }>({
    name: "",
    contractAddress: "",
    abi: "",
  });

  const handleSkillSubmit = (data: { name: string; contractAddress: string; abi: string }) => {
    setSkillData(data); // Save the submitted data to state
  };

  return (
    <div className="flex space-x-8">
      {/* Form Section */}
      <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1 flex-1">
        <h2 className="text-3xl font-bold text-[#fd01f5]">Create Web3 Skill</h2>
        <CreateSkillForm onSubmit={handleSkillSubmit} />
      </div>

      {/* Preview Section */}
      <div className="flex-1">
        <PreviewSkill skill={skillData} />
      </div>
    </div>
  );
};

export default CreateSkill;
