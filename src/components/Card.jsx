export default function Card({
  id,
  value,
  onCardClick,
  backCard,
  setBackCard,
}) {
  return (
    <>
      <li
        onClick={() => {
          (onCardClick({ id, value }), setBackCard(id));
        }}
        className={`card ${backCard === id ? "backCard" : ""}`}>
        <div className="front">❓</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
