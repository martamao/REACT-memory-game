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
          onCardClick({ id, value });
          setBackCard((prev) => {
            if (prev.length === 2) {
              return [{ id, value }];
            }
            return [...prev, { id, value }];
          });
        }}
        className={`card ${backCard.some((card) => card.id === id) ? "backCard" : ""}`}>
        <div className="front">❓</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
