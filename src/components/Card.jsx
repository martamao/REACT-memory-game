export default function Card({
  id,
  value,
  onCardClick,
  backCard,
  setBackCard,
  matchedCards,
}) {
  const clickedCard = backCard.some((card) => card.id === id);
  const itsAMatch = matchedCards.some((card) => card.id === id);
  const isVisible = clickedCard || itsAMatch;

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
        className={`card ${isVisible ? "backCard" : ""} ${itsAMatch ? "itsAMatch" : ""}`}>
        <div className="front">​👀</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
