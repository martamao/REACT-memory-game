import { useState, useEffect, useCallback } from "react";
import { CARD_ARRAY, RESET_ANIMATION_DURATION, MATCH_DELAY } from "../constants";

export const useMemoryGame = () => {
  const cardArrayDuplicate = [...CARD_ARRAY, ...CARD_ARRAY];

  const shuffleCards = useCallback(() => {
    // Implementación de Fisher-Yates para un barajado más justo
    const cardArrayObj = cardArrayDuplicate.map((value, index) => ({
      id: index,
      value,
    }));
    
    for (let i = cardArrayObj.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArrayObj[i], cardArrayObj[j]] = [cardArrayObj[j], cardArrayObj[i]];
    }
    
    return cardArrayObj;
  }, []);

  const [cards, setCards] = useState(shuffleCards);
  const [backCard, setBackCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = useCallback(() => {
    setIsResetting(true);
    setBackCard([]);
    setMatchedCards([]);
    setResult(false);

    setTimeout(() => {
      setCards(shuffleCards());
      setCount(0);
      setPoints(0);
      setIsResetting(false);
    }, RESET_ANIMATION_DURATION);
  }, [shuffleCards]);

  useEffect(() => {
    if (backCard.length === 2) {
      setCount((prev) => prev + 1);
      const timer = setTimeout(() => {
        if (backCard[0].value === backCard[1].value) {
          setMatchedCards((prev) => [...prev, backCard[0], backCard[1]]);
          setPoints((prev) => prev + 1);
        }
        setBackCard([]);
      }, MATCH_DELAY);
      return () => clearTimeout(timer);
    }
  }, [backCard]);

  useEffect(() => {
    if (matchedCards.length === cardArrayDuplicate.length && cardArrayDuplicate.length > 0) {
      setResult(true);
    }
  }, [matchedCards, cardArrayDuplicate.length]);

  const selectCard = (cardData) => {
    if (isResetting) return;
    
    setBackCard((prev) => {
      // Evitar seleccionar la misma carta o más de 2
      if (prev.find(c => c.id === cardData.id) || prev.length >= 2) return prev;
      return [...prev, cardData];
    });
  };

  return {
    cards,
    backCard,
    matchedCards,
    count,
    points,
    result,
    isResetting,
    handleReset,
    selectCard
  };
};
