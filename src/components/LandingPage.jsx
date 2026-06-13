import { useState } from "react";
import Button from "./Button";
import "../styles/LandingPage.scss";

export default function LandingPage({ onStartGame }) {
  const [playerName, setPlayerName] = useState("");

  const handleInputChange = (ev) => {
    const value = ev.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (value.length <= 3) {
      setPlayerName(value);
    }
  };

  const isButtonDisabled = playerName.length !== 3;

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter" && !isButtonDisabled) {
      onStartGame(playerName);
    }
  };

  const renderRetroInput = () => {
    const letters = playerName.split("");
    const placeholders = ["_", "_", "_"];
    return (
      <div className="retroInputContainer">
        <span className="playerLabel">Player:</span>
        <div className="lettersContainer">
          {placeholders.map((_, index) => (
            <span key={index} className="retroLetter">
              {letters[index] || "_"}
            </span>
          ))}
        </div>
        <input
          type="text"
          value={playerName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="hiddenInput"
          maxLength={3}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="landingPage">
      <p className="introQ">Can you find all the pairs in less than 16 moves?</p>
      {renderRetroInput()}
      <Button
        text="Let's find out!"
        btnName="startBtn"
        onBtnClick={() => onStartGame(playerName)}
        disabled={isButtonDisabled} // Note: Button component might need updating to handle disabled prop
      />
    </div>
  );
}
