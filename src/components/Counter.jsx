import "../styles/Counter.scss";

export default function Counter({ count, points }) {
  return (
    <div className="counterSection">
      <p>Moves: {count}</p>
      <p>Points: {points}</p>
    </div>
  );
}
