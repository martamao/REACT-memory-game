import "./App.scss";
import { useState } from "react";

export default function App() {
  const emojis = ["🎈", "🎨", "🎯", "🎪", "🎭", "🎸", "🎺", "🎮"];
  const emojisDuplicate = [...emojis, ...emojis];
  const emojiObj = emojisDuplicate.map((emoji, index) => {
    return {
      id: index,
      value: emoji,
    };
  });

  const [card, setCard] = useState({
    id: "",
    value: "",
  });
  const suffledCards = emojiObj.sort(() => Math.random() - 0.5);
  suffledCards.map((card) => <li key={card.id}>{card.value}</li>);

  const handleClick = (ev) => {
    const cardClicked = ev.target.value;
    setCard[cardClicked];
  };

  return (
    <body>
      <h1>Memory Game</h1>
      <main>
        <div className="table">
          {suffledCards.map((card) => (
            <Card key="" id={card.id} value={card.value}></Card>
          ))}
        </div>
      </main>
    </body>
  );
}
