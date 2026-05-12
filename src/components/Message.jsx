export default function Message({ result, count, points }) {
  if (!result) return;
  let textMessage;
  if (count <= 16) {
    textMessage = "Wow, you did it!";
  } else if (count > 16) {
    textMessage = "You'll do better next time!";
  }
  return <p className="result">{textMessage}</p>;
}
