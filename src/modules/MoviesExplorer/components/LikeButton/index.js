import "./LikeButton.css";

export default function LikeButton({ movieId }) {
  return (
    <input className="like-button" type="checkbox" aria-label="В избранные" />
  );
}
