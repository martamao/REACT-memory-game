import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";

export default function App() {
  const emojis = ["🎈", "🎨", "🎯", "🎪", "🎭", "🎸", "🎺", "🎮"];

  const [cards, setCards] = useState(() => {
    const emojisDuplicate = [...emojis, ...emojis];

    const emojiObj = emojisDuplicate.map((emoji, index) => ({
      id: index,
      value: emoji,
    }));
    return emojiObj.sort(() => Math.random() - 0.5);
  });

  const [cardSelected, setCardSelected] = useState();
  const handleClickedCard = (cardData) => {
    setCardSelected(cardData);
  };

  const [backCard, setBackCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (backCard.length === 2) {
      if (backCard[0].value === backCard[1].value) {
        setMatchedCards((prev) => [...prev, backCard[0], backCard[1]]);
      }
    }
  }, [backCard]);

  return (
    <main>
      <h1>Memory Game</h1>
      <div className="table">
        {cards.map((card) => (
          <Card
            onCardClick={handleClickedCard}
            key={card.id}
            id={card.id}
            value={card.value}
            backCard={backCard}
            setBackCard={setBackCard}
            matchedCards={matchedCards}></Card>
        ))}
      </div>
    </main>
  );
}
