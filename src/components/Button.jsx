import "../styles/Button.scss";

export default function Button({ text, btnName, onBtnClick, disabled, className = "" }) {
  return (
    <button 
      className={`btn ${btnName} ${disabled ? 'disabled' : ''} ${className}`} 
      onClick={!disabled ? onBtnClick : null}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
}
