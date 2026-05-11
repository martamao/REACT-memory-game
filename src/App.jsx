import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import Counter from "./components/Counter";

export default function App() {
  const cardArray = ["👽​​​", "🧟‍♀️", "👩🏻‍🚀", "🧑🏻‍💻", "🥷🏻​​", "🐒", "🦚", "🦭​"];
  const [cards, setCards] = useState(() => {
    const cardArrayDuplicate = [...cardArray, ...cardArray];

    const cardArrayObj = cardArrayDuplicate.map((oneCard, index) => ({
      id: index,
      value: oneCard,
    }));
    return cardArrayObj.sort(() => Math.random() - 0.5);
  });
  
​​​​​​​  const [cardSelected, setCardSelected] = useState();
  const [backCard, setBackCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [count, setCount] = useState(0)
  const [points, setPoints] = useState(0)
  const [result, setResult] = useState(false)
  const [startBtn, setStartBtn] = useState(true)
 
  const handleClickedCard = (cardData) => {
    setCardSelected(cardData);
  };

  const handleResetBtn = () => {
    setCount(0)
    setPoints(0)
    setCardSelected({id:"", value:""})
    setBackCard([])
    setMatchedCards([])
  }

const handleStartBtn = () => {
  setStartBtn(false)
}
  useEffect(() => {
    if (backCard.length === 2) {
       setCount((click) => click + 1)
      setTimeout(() => {
        if (backCard[0].value === backCard[1].value) {
          setMatchedCards((card) => [...card, backCard[0], backCard[1]]);
            setPoints((point) => point + 1)
        } else {
          setBackCard((card) => []);
        }
      }, 1000);
    }
  }, [backCard]);

  useEffect(() => {
    if(matchedCards.length === cards.length){
      setResult(true)
    }
  }, [matchedCards])

  return (
    <main>
      <h1>Memory Game</h1>
      <Button text="Start Game" btnName="startBtn" onBtnClick={handleStartBtn}></Button>
      <Counter count={count} points={points}></Counter>
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
      <Button onBtnClick={handleResetBtn} text="Reset" btnName="resetBtn"></Button>
    </main>
  );
}
