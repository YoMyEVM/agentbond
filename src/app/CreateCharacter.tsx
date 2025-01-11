import React from "react";

const CreateCharacter: React.FC = () => {
  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center text-[#fd01f5] mb-8">
        Create Your AI Character
      </h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        Craft the unique personality, traits, and abilities of your AI Brain.
      </p>
      <div className="bg-gray-900 p-8 rounded shadow-lg">
        <p className="text-gray-400 text-center">
          This is a placeholder page. Add your form or creation steps here.
        </p>
      </div>
    </div>
  );
};

export default CreateCharacter;
