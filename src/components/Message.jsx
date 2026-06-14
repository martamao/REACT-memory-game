import "../styles/Message.scss";

export default function Message({ result, timeout, count, points }) {
  if (timeout) return <p className="result">Time's up! Try again!</p>;
  if (!result) return;
  let textMessage;
  if (count <= 16) {
    textMessage = "Wow, you did it!";
  } else if (count > 16) {
    textMessage = "You'll do better next time!";
  }
  return <p className="result">{textMessage}</p>;
}
