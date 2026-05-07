import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const emojis = ["🎈", "🎨", "🎯", "🎪", "🎭", "🎸", "🎺", "🎮"];
  const emojisDuplicate = [...emojis, ...emojis];
  const emojiObj = emojisDuplicate.map((emoji, index) => {
    return {
      id: index,
      value: emoji,
    };
  });
  const suffledCards = emojiObj.sort(() => Math.random() - 0.5);

  const [card, setCard] = useState({
    id: "",
    value: "",
  });

  const handleClick = (ev) => {
    setCard(ev.target.id);
  };

  return (
    <main>
      <h1>Memory Game</h1>
      <div className="table">
        {suffledCards.map((card) => (
          <Card
            onClick={handleClick}
            key={card.id}
            id={card.id}
            value={setCard}></Card>
        ))}
      </div>
    </main>
  );
}
