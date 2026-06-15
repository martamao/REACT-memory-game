import { useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import Message from "./Message";
import Counter from "./Counter";
import { useMemoryGame } from "../hooks/useMemoryGame";
import { RESET_ANIMATION_DURATION } from "../constants";

export default function MemoryBoard({ difficulty, onBackToLanding, onShowRanking, playerName }) {
  const {
    cards,
    backCard,
    matchedCards,
    count,
    points,
    result,
    isResetting,
    elapsedTime,
    timeout,
    gameStarted,
    handleReset,
    startGame,
    selectCard
  } = useMemoryGame(difficulty);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (result) {
      onShowRanking(count, elapsedTime, difficulty);
    }
  }, [result, count, elapsedTime, difficulty, onShowRanking]);

  return (
    <>
      <Counter count={count} points={points} time={elapsedTime} />
      <div className="table" role="grid" aria-label="Memory Game Board">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            value={card.value}
            onCardClick={selectCard}
            isFlipped={backCard.some((c) => c.id === card.id)}
            isMatched={matchedCards.some((c) => c.id === card.id)}
            isResetting={isResetting}
          />
        ))}
      </div>
      
      <div className="navContainer">
        <Button onBtnClick={onBackToLanding} text="GO BACK" btnName="backToLandingBtn" className="btn--nav" />
      </div>

      {timeout && (
        <div className="resultSection">
          <Message timeout={timeout} />
          <div className="resultButtons">
            <Button onBtnClick={handleReset} text="Reset game" btnName="resetBtn" />
          </div>
        </div>
      )}

      {result && (
        <div className="resultSection">
          <Message result={result} count={count} points={points} />
          <div className="resultButtons">
            <Button onBtnClick={handleReset} text="RESET" btnName="resetBtn" />
          </div>
        </div>
      )}
    </>
  );
}
