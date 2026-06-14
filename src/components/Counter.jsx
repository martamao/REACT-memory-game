import "../styles/Counter.scss";

export default function Counter({ count, points, time }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="counterSection">
      <p>Moves: {count}</p>
      <p>Points: {points}</p>
      <p>Time: {formatTime(time)}</p>
    </div>
  );
}
