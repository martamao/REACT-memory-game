import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";

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

  const [backCard, setBackCard] = useState(false);
  const handleCardMove = () => {
    const arr = [];
    arr.push(ev.target.value);
    for (const item of arr) {
      setBackCard(true);
    }
  };
  const shuffleCards = () => {
    {
      /**Para reiniciar */
    }
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

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
            backCard={handleCardMove}></Card>
        ))}
      </div>
    </main>
  );
}
