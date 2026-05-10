import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import Counter from "./components/Counter";

export default function App() {
  const emojis = ["👽​​​", "🧟‍♀️", "👩🏻‍🚀", "🧑🏻‍💻", "🥷🏻​​", "🐒", "🦚", "🦭​"];
​​​​​​​
  const [cards, setCards] = useState(() => {
    const emojisDuplicate = [...emojis, ...emojis];

    const emojiObj = emojisDuplicate.map((emoji, index) => ({
      id: index,
      value: emoji,
    }));
    return emojiObj.sort(() => Math.random() - 0.5);
  });

  const [cardSelected, setCardSelected] = useState();
   const [count, setCount] = useState(0)
   const [points, setPoints] = useState()

  const handleClickedCard = (cardData) => {
    setCardSelected(cardData);
   
  };

  const [backCard, setBackCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (backCard.length === 2) {
       setCount((click) => click + 1)
      setTimeout(() => {
        if (backCard[0].value === backCard[1].value) {
          setMatchedCards((card) => [...card, backCard[0], backCard[1]]);
          
        } else {
          setBackCard((card) => []);
        }
      }, 1000);
    }
  }, [backCard]);

  const [result, setResult] = useState(false)

  useEffect(() => {
    if(matchedCards.length === cards.length){
      setResult(true)
    }
  }, [matchedCards])


  return (
    <main>
      <h1>Memory Game</h1>
      <Counter count={count}></Counter>
      <Button></Button>
      <div className="table">
        {cards.map((card) => (
          <Card
            onCardClick={handleClickedCard}
            key={card.id}
            id={card.id}
            value={card.value}
            backCard={backCard}
            setBackCard={setBackCard}
            matchedCards={matchedCards}
            ></Card>
        ))}
      </div>
      <Message result={result}></Message>
      <Button></Button>
    </main>
  );
}
