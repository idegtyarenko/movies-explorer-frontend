import useCheckedStatus from "./hooks/useCheckedStatus";
import "./LikeButton.css";

export default function LikeButton({ movieId }) {
  const [isChecked, handleChange] = useCheckedStatus(movieId);

  return (
    <input
      className="like-button"
      type="checkbox"
      aria-label="В избранные"
      checked={isChecked}
      onChange={handleChange}
    />
  );
}
