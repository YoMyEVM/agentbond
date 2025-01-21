interface ChainDetailProps {
  chain: {
    name: string;
    image?: string;
    color: string;
    id: number;
  };
  sold?: number; // Optional prop for sold
  totalunits?: number; // Optional prop for totalunits
}

const ChainDetail: React.FC<ChainDetailProps> = ({ chain, sold = 0, totalunits = 80 }) => {
  const progress = totalunits ? sold / totalunits : 0;

  return (
    <div className="max-w-lg mx-auto bg-black p-6 rounded-lg shadow-lg text-center">
      {/* Centered Logo and Chain Name */}
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={chain.image || "/defaultLogo.png"}
          alt={`${chain.name} logo`}
          className="w-40 h-40 object-cover rounded-full mb-4" // Updated logo size
        />
        <h2 className="text-2xl font-semibold text-white">{chain.name}</h2>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">
              {sold}/{totalunits}
            </span>
          </div>
          <div className="flex mb-4 items-center justify-between w-full">
            <div className="relative pt-1 w-full">
              <div className="flex mb-2">
                <div className="flex w-full">
                  <div
                    className="progress-bar h-2 rounded-full"
                    style={{
                      width: `${progress * 100}%`,
                      backgroundColor: progress >= 1 ? "#4caf50" : chain.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainDetail;
