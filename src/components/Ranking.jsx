import '../styles/Ranking.scss';
import Button from './Button';

const MOCK_RANKING = [
  { name: 'AAA', moves: 12 },
  { name: 'BBB', moves: 15 },
  { name: 'CCC', moves: 18 },
  { name: 'DDD', moves: 22 },
  { name: 'EEE', moves: 25 },
];

export default function Ranking({ onBackToGame, currentPlayerName, currentMoves }) {
  // En el futuro, esto vendrá del backend. 
  // Por ahora, solo mostramos la lista simulada.
  
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
            </tr>
          </thead>
          <tbody>
            {MOCK_RANKING.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.moves}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="current-stats">
        <p>Your last game ({currentPlayerName}): <strong>{currentMoves} moves</strong></p>
      </div>

      <Button onBtnClick={onBackToGame} text="Back to Game" btnName="backBtn" />
    </section>
  );
}
