import React, { useState } from "react";

interface Submission {
  id: number;
  username: string;
  item: string;
  upVotes: number;
  downVotes: number;
}

const AgentVoting: React.FC = () => {
  // Sample data for user submissions
  const [submissions, setSubmissions] = useState<Submission[]>([
    { id: 1, username: "User1", item: "Sword of Valor", upVotes: 3, downVotes: 1 },
    { id: 2, username: "User2", item: "Shield of Courage", upVotes: 5, downVotes: 0 },
    { id: 3, username: "User3", item: "Potion of Speed", upVotes: 2, downVotes: 2 },
  ]);

  // Handle upvote and downvote actions
  const handleVote = (id: number, type: "up" | "down") => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) =>
        submission.id === id
          ? {
              ...submission,
              upVotes: type === "up" ? submission.upVotes + 1 : submission.upVotes,
              downVotes: type === "down" ? submission.downVotes + 1 : submission.downVotes,
            }
          : submission
      )
    );
  };

  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg">
      <h2 className="text-3xl font-bold text-[#fd01f5]">Vote on Equipment for Upcoming Epoch</h2>
      
      {/* Table for User Submissions */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left text-[#fd01f5] py-2 px-4">Username</th>
              <th className="text-left text-[#fd01f5] py-2 px-4">Item</th>
              <th className="text-left text-[#fd01f5] py-2 px-4">Upvotes</th>
              <th className="text-left text-[#fd01f5] py-2 px-4">Downvotes</th>
              <th className="text-left text-[#fd01f5] py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-t border-gray-700">
                <td className="py-2 px-4">{submission.username}</td>
                <td className="py-2 px-4">{submission.item}</td>
                <td className="py-2 px-4">{submission.upVotes}</td>
                <td className="py-2 px-4">{submission.downVotes}</td>
                <td className="py-2 px-4 flex space-x-4">
                  <button
                    onClick={() => handleVote(submission.id, "up")}
                    className="bg-[#01fcfc] text-black px-4 py-2 rounded hover:bg-[#fd01f5]"
                  >
                    Upvote
                  </button>
                  <button
                    onClick={() => handleVote(submission.id, "down")}
                    className="bg-[#fd01f5] text-black px-4 py-2 rounded hover:bg-[#01fcfc]"
                  >
                    Downvote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentVoting;
