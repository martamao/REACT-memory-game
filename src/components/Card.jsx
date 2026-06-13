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
        className={`card ${isVisible ? "backCard" : ""} ${isMatched && !isResetting ? "itsAMatch" : ""}`}>
        <div className="front">​👀</div>
        <div className="back">{value}</div>
      </li>
    </>
  );
}
