import IconButton from "ui/IconButton";

import "./RemoveButton.css";

export default function RemoveButton() {
  return (
    <IconButton
      className="movie-cards-grid__remove-button"
      ariaLabel="Удалить из избранных"
    />
  );
}
