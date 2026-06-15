import { useEffect, useState } from 'react';
import '../styles/Ranking.scss';
import Button from './Button';
import { STORAGE_KEY, DIFFICULTIES } from '../constants';

export default function Ranking({ onBackToGame, onBackToLanding, currentPlayerName, currentMoves, currentTime, difficulty }) {
  const [rankingData, setRankingData] = useState({});
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const data = {};
    Object.values(DIFFICULTIES).forEach(diff => {
      const storageKey = `${STORAGE_KEY}_${diff.name.toUpperCase()}`;
      data[diff.name] = JSON.parse(localStorage.getItem(storageKey) || '[]');
    });
    setRankingData(data);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getSortedRanking = (levelName) => {
    return [...(rankingData[levelName] || [])]
      .sort((a, b) => a.moves - b.moves || a.time - b.time)
      .slice(0, 5);
  };

  const renderTable = (levelName) => {
    const sortedRanking = getSortedRanking(levelName);
    return (
      <div key={levelName} className="table-container">
        <h3>{levelName}</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Moves</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {sortedRanking.length > 0 ? (
              sortedRanking.map((player, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.moves}</td>
                  <td>{formatTime(player.time)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No records.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section className="ranking">
      <h2>Top Players</h2>
      
      {viewAll ? (
        <div className="all-rankings-grid">
          {Object.values(DIFFICULTIES).map(diff => renderTable(diff.name))}
        </div>
      ) : (
        renderTable(difficulty?.name || Object.values(DIFFICULTIES)[0].name)
      )}

      <div className="actions">
        {difficulty && <Button onBtnClick={() => setViewAll(!viewAll)} text={viewAll ? "Show Current" : "View All Rankings"} btnName="viewAllBtn" />}
        {onBackToGame && <Button onBtnClick={onBackToGame} text="Back to Game" btnName="backBtn" />}
        <Button onBtnClick={onBackToLanding} text="Go Back" btnName="goBackBtn" className="btn--go-back" />
      </div>
    </section>
  );
}
