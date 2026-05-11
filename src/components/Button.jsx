export default function Button({ text, btnName, onBtnClick, showGame }) {
  const handleClickBtn = (ev) => {
    showGame();
  };
  return (
    <button className={`btn ${btnName}`} onClick={onBtnClick}>
      <p>{text}</p>
    </button>
  );
}
