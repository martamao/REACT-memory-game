export default function Card({ id, value, onCardClick, backCard }) {
  return (
    <>
      <li
        onClick={() => onCardClick({ id, value })}
        className={`card ${backCard ? "backcard" : ""}`}>
        <div className="front">❓</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
