export default function Card({
  id,
  value,
  onCardClick,
  backCard,
  setBackCard,
  matchedCards,
}) {
  const isVisible =
    backCard.some((card) => card.id === id) ||
    matchedCards.some((card) => card.id === id);

  return (
    <>
      <li
        onClick={() => {
          onCardClick({ id, value });
          setBackCard((card) => {
            if (card.length === 2) {
              return [{ id, value }];
            }
            return [...card, { id, value }];
          });
        }}
        className={`card ${isVisible ? "backCard" : ""}`}>
        <div className="front">❓</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
