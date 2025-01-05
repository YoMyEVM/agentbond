import React, { useState } from "react";

interface ChatBoxProps {
  agentName: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ agentName }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [message, setMessage] = useState<string>("");

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: agentName, text: `Response to "${message}"` }, // Placeholder response
      ]);
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div className="text-white">
      {/* Chat Window: Display previous messages */}
      <div className="bg-gray-700 p-4 rounded-lg h-60 overflow-auto mb-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-green-500" : "bg-gray-600"} text-white`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-2">
        <textarea
          className="w-full h-16 p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          placeholder={`Type your message to ${agentName}...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
