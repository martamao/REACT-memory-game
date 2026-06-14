import { useEffect, useState } from 'react';
import '../styles/Ranking.scss';
import Button from './Button';
import { STORAGE_KEY } from '../constants';

export default function Ranking({ onBackToGame, currentPlayerName, currentMoves, currentTime }) {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const storedRanking = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setRanking(storedRanking);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Ordenar: primero por movimientos, luego por tiempo
  const sortedRanking = [...ranking].sort((a, b) => a.moves - b.moves || a.time - b.time).slice(0, 10);

  return (
    <section className="ranking">
      <h2>Top Players</h2>
      <div className="table-container">
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
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No records yet. Be the first!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="current-stats">
        <p>Your last game ({currentPlayerName}):</p>
        <p><strong>{currentMoves} moves</strong> in <strong>{formatTime(currentTime)}</strong></p>
      </div>

      <Button onBtnClick={onBackToGame} text="Back to Game" btnName="backBtn" />
    </section>
  );
}
