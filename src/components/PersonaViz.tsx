import React from "react";

interface PersonaVizProps {
  imageSrc: string;
}

const PersonaViz: React.FC<PersonaVizProps> = ({ imageSrc }) => {
  return (
    <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border-2 border-accent1">
      {imageSrc ? (
        <img src={imageSrc} alt="Persona" className="object-cover w-full h-full" />
      ) : (
        <div className="text-white text-center">No Image Available</div>
      )}
    </div>
  );
};

export default PersonaViz;
