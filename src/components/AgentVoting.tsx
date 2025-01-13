import React, { useState } from "react";
import './AgentVoting.css'; // Import the CSS file here

interface Submission {
  id: number;
  username: string;
  item: string;
  upVotes: number;
  downVotes: number;
}

const AgentVoting: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    { id: 1, username: "User1", item: "Sword of Valor", upVotes: 3, downVotes: 1 },
    { id: 2, username: "User2", item: "Shield of Courage", upVotes: 5, downVotes: 0 },
    { id: 3, username: "User3", item: "Potion of Speed", upVotes: 2, downVotes: 2 },
  ]);

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
      <h2 className="text-2xl font-bold text-[#fd01f5]">Vote on Goals for the Upcoming Epoch</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left text-accent1 py-2 px-4">Username</th>
              <th className="text-left text-accent1 py-2 px-4">Item</th>
              <th className="text-left text-accent1 py-2 px-4">Upvotes</th>
              <th className="text-left text-accent1 py-2 px-4">Downvotes</th>
              <th className="text-left text-accent1 py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-t border-gray-700">
                <td className="py-2 px-4 text-white">{submission.username}</td>
                <td className="py-2 px-4 text-white">{submission.item}</td>
                <td className="py-2 px-4 text-white">{submission.upVotes}</td>
                <td className="py-2 px-4 text-white">{submission.downVotes}</td>
                <td className="py-2 px-4">
                  <div className="widget-vertical center-left">

                    <div className="thumbs">
                      {/* Upvote Button */}
                      <div
                        className="thumb-button upvote-button"
                        onClick={() => handleVote(submission.id, "up")}
                      >
                        <i className="thumbs-icon thumbs-icon-up">👍</i>
                        <p>YES</p>
                      </div>

                      {/* Downvote Button */}
                      <div
                        className="thumb-button downvote-button"
                        onClick={() => handleVote(submission.id, "down")}
                      >
                        <i className="thumbs-icon thumbs-icon-down">👎</i>
                        <p>NO</p>
                      </div>
                    </div>
                  </div>
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
