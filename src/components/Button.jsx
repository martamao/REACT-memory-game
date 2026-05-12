export default function Button({ text, btnName, onBtnClick }) {
  return (
    <button className={`btn ${btnName}`} onClick={onBtnClick}>
      <p>{text}</p>
    </button>
  );
}
