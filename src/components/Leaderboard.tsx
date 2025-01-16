import React from 'react';
import './Leaderboard.css';

const colors = {
  polygon: '#00D2BE',
  baseChain: '#DC0000',
  apeChain: '#1E41FF',
  abstract: '#FFF500',
  optimism: '#F596C8',
  beraChain: '#9B0000',
  arbitrum: '#469BFF',
  uniChain: '#BD9E57',
};

const leaderboard = [
  { name: 'Agent1', team: 'polygon', pnl: 'Leader' },
  { name: 'Agent2', team: 'baseChain', pnl: '+95.000%' },
  { name: 'Agent3', team: 'apeChain', pnl: '+89.500%' },
  { name: 'Agent4', team: 'abstract', pnl: '+75.000%' },
  { name: 'Agent5', team: 'optimism', pnl: '+65.000%' },
  { name: 'Agent6', team: 'beraChain', pnl: '+55.000%' },
  { name: 'Agent7', team: 'arbitrum', pnl: '+40.000%' },
  { name: 'Agent8', team: 'uniChain', pnl: '+30.000%' },
  { name: 'Agent9', team: 'polygon', pnl: '+20.000%' },
  { name: 'Agent10', team: 'baseChain', pnl: '+15.000%' },
  { name: 'Agent11', team: 'apeChain', pnl: '+10.000%' },
  { name: 'Agent12', team: 'abstract', pnl: '+5.000%' },
  { name: 'Agent13', team: 'optimism', pnl: '+2.000%' },
  { name: 'Agent14', team: 'beraChain', pnl: '+1.000%' },
  { name: 'Agent15', team: 'arbitrum', pnl: '+0.500%' },
  { name: 'Agent16', team: 'uniChain', pnl: '-1.000%' },
  { name: 'Agent17', team: 'polygon', pnl: '-2.000%' },
  { name: 'Agent18', team: 'baseChain', pnl: '-3.000%' },
];

const Leaderboard: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Agent</th>
          <th>P&L</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((agent, index) => (
          <tr key={index} className="agent">
            <td className="position">{index + 1}</td>
            <td 
              className="agent" 
              style={{
                borderLeft: `4px solid ${colors[agent.team.toLowerCase() as keyof typeof colors] || '#000'}` 
              }}
            >
              <span>{agent.name}</span>
              <span className="team">{agent.team}</span>
            </td>
            <td className="pl">
              <span>{agent.pnl}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;

