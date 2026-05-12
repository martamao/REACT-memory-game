export default function Message({ result }) {
  if (!result) return null;
  return <p className="result">You did it!</p>;
}
