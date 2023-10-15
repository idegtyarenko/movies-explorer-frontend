import useFavoriteStatus from "./hooks/useFavoriteStatus";
import "./LikeButton.css";

export default function LikeButton({ movieId }) {
  const [isFavorite, handleChange] = useFavoriteStatus(movieId);

  return (
    <input
      className="like-button"
      type="checkbox"
      aria-label="В избранные"
      checked={isFavorite}
      onChange={handleChange}
    />
  );
}
