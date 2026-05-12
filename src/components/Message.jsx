export default function Message({ result, count, points }) {
  let textMessage;
  if (count <= 16) {
    textMessage = "Wow, you did it!";
  } else if (count > 16) {
    textMessage = "Next time you'll be better!";
  }
  return <p className="result">{textMessage}</p>;
}
