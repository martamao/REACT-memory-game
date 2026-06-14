import '../styles/Ranking.scss';
import Button from './Button';

// Nota: En una implementación real, esto vendría de LocalStorage o un backend.
const MOCK_RANKING = [
  { name: 'AAA', moves: 12, time: 60 },
  { name: 'BBB', moves: 15, time: 80 },
  { name: 'CCC', moves: 18, time: 90 },
  { name: 'DDD', moves: 12, time: 50 },
  { name: 'EEE', moves: 25, time: 100 },
];

export default function Ranking({ onBackToGame, currentPlayerName, currentMoves, currentTime }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Ordenar: primero por movimientos, luego por tiempo
  const sortedRanking = [...MOCK_RANKING].sort((a, b) => a.moves - b.moves || a.time - b.time);

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
            {sortedRanking.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.moves}</td>
                <td>{formatTime(player.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="current-stats">
        <p>Your last game ({currentPlayerName}): <strong>{currentMoves} moves</strong> in <strong>{formatTime(currentTime)}</strong></p>
      </div>

      <Button onBtnClick={onBackToGame} text="Back to Game" btnName="backBtn" />
    </section>
  );
}
