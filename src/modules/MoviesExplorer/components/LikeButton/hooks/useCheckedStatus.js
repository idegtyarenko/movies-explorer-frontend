import { useState, useEffect } from "react";

import { useDisplayNotification } from "modules/ContentWithNotifications";
import { addFavorite, removeFavorite } from "utils/mainApi";

import { useMoviesData, useMoviesDataDispatch } from "../../../store";

export default function useFavoriteStatus(movieId) {
  const { favorites, movies } = useMoviesData();
  const dispatch = useMoviesDataDispatch();
  const displayNotification = useDisplayNotification();
  const [_id, set_id] = useState(favorites[movieId]); // Represents if movie is in favorites on the back end
  const [isChecked, setisChecked] = useState(!!_id); // Represents checkbox status

  useEffect(() => {
    // Update store only when new favorite state was successfully saved on server
    if (isChecked === !!_id) {
      const type = isChecked ? "addToFavorites" : "removeFromFavorites";
      dispatch({ type, movieId, _id });
    }
  }, [isChecked, _id, dispatch, movieId]);

  async function handleChange(e) {
    e.preventDefault();

    const previousIsChecked = isChecked;
    setisChecked(!previousIsChecked); // Switch checkbox optimistically

    try {
      if (previousIsChecked) {
        await removeFavorite(_id);
        set_id(null);
      } else {
        const response = await addFavorite(
          movies.find((movie) => movie.movieId === movieId),
        );
        set_id(response._id);
      }
    } catch (err) {
      displayNotification({
        type: "error",
        title: `Не удалось ${
          previousIsChecked ? "удалить из любимых" : "добавить в любимые"
        }`,
        text: err.message,
      });
      setisChecked(previousIsChecked); // Return to previous checkbox state
    }
  }

  return [isChecked, handleChange];
}
