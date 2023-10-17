import {
  useMoviesData,
  useMoviesDataDispatch,
} from "modules/MoviesExplorer/store";
import { useDisplayNotification } from "modules/ContentWithNotifications";
import { removeFavorite } from "utils/mainApi";
import IconButton from "ui/IconButton";

import "./RemoveButton.css";

export default function RemoveButton({ movieId }) {
  const { favorites } = useMoviesData();
  const dispatch = useMoviesDataDispatch();
  const displayNotification = useDisplayNotification();

  async function handleClick(e) {
    e.preventDefault();
    const _id = favorites[movieId];

    try {
      await removeFavorite(_id);
      dispatch({ type: "removeFromFavorites", movieId });
    } catch (err) {
      displayNotification({
        type: "error",
        title: "Не удалось удалить из любимых",
        text: err.message,
      });
    }
  }

  return (
    <IconButton
      className="movie-cards-grid__remove-button"
      ariaLabel="Удалить из избранных"
      onClick={handleClick}
    />
  );
}
