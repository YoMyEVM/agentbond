// src/components/ChatBox.tsx
import React from "react";

interface ChatBoxProps {
  agentName: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ agentName }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-lg font-bold mb-2">Chat</h2>
      <p className="text-gray-300 text-sm">Interact with {agentName}</p>
      <div className="mt-4">
        <textarea
          className="w-full h-32 p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          placeholder="Type your message..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
