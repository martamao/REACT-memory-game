import "../styles/Button.scss";

export default function Button({ text, btnName, onBtnClick, disabled }) {
  return (
    <button 
      className={`btn ${btnName} ${disabled ? 'disabled' : ''}`} 
      onClick={!disabled ? onBtnClick : null}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
}
