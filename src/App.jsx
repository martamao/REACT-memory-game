import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";
import Button from "./components/Button"
import Message from "./components/Message";
import Counter from "./components/Counter";

export default function App() {
  const cardArray = ["👽​​​", "🧟‍♀️", "👩🏻‍🚀", "🧑🏻‍💻", "🥷🏻​​", "🐒", "🦚", "🦭​"];
  const cardArrayDuplicate = [...cardArray, ...cardArray];
  const suffleCards = () => {
    const cardArrayObj = cardArrayDuplicate.map((oneCard, index) => ({
      id: index,
      value: oneCard,
    }));
    return cardArrayObj.sort(() => Math.random() - 0.5);
  }
  
  const [cards, setCards] = useState(suffleCards)
​​​​​​​  const [cardSelected, setCardSelected] = useState();
  const [backCard, setBackCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [count, setCount] = useState(0)
  const [points, setPoints] = useState(0)
  const [result, setResult] = useState(false)
  const [resetGame, setResetGame] = useState()
  const [startGame, setStartGame] = useState("start")
 
  const handleClickedCard = (cardData) => {
    setCardSelected(cardData);
  };

  const handleResetBtn = () => {
    setCount(0)
    setPoints(0)
    setCardSelected({id:"", value:""})
    setBackCard([])
    setMatchedCards([])
    setCards(suffleCards)
    setResult(false)
  }

  const showGame = () => {
    setStartGame("game")
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
    if(matchedCards.length === cardArrayDuplicate.length){
      setResult(true)
    }
  }, [matchedCards])

  return (
    <main>
      <h1>Memory Game</h1>
      {startGame === "start" ? (<div className="startPage"><p className="introQ">Can you find all the pairs in less than 16 moves?</p><Button text="Let's find out!" btnName="startBtn" onBtnClick={showGame}></Button></div>) 
      : (<>
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
        </>)}
        {result === true ? (
          <><Message result={result} count={count} points={points}></Message>
          <Button onBtnClick={handleResetBtn} text="Reset game" btnName="resetBtn"></Button></>) : ""}
    </main>
  );
}
