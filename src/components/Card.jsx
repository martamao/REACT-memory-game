import "../styles/Card.scss";

export default function Card({
  id,
  value,
  onCardClick,
  isFlipped,
  isMatched,
  isResetting,
}) {
  const isVisible = (isFlipped || isMatched) && !isResetting;

  return (
    <>
      <li
        onClick={() => {
          if (isResetting || isVisible) return;
          onCardClick({ id, value });
        }}
        className={`card ${isVisible ? "backCard" : ""} ${isMatched && !isResetting ? "itsAMatch" : ""}`}
        role="gridcell"
        tabIndex="0"
        aria-label={`Card ${id}: ${isMatched && !isResetting ? `Matched ${value}` : isVisible ? `Flipped ${value}` : 'Hidden'}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (isResetting || isVisible) return;
            onCardClick({ id, value });
          }
        }}
      >
        <div className="front">​👀</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
