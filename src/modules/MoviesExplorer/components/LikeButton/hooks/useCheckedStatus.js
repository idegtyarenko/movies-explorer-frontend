import { useState, useEffect } from "react";

import { addFavorite, removeFavorite } from "utils/mainApi";

import { useMoviesData, useMoviesDataDispatch } from "../../../store";

export default function useFavoriteStatus(movieId) {
  const { favorites, movies } = useMoviesData();
  const dispatch = useMoviesDataDispatch();
  const [_id, set_id] = useState(favorites[movieId]); // Represents if movie is in favorites on the back end
  const [isChecked, setisChecked] = useState(!!_id); // Represents checkbox status

  useEffect(() => {
    // Update store only when new favorite state was successfully saved on server
    if (isChecked === !!_id) {
      const type = isChecked ? "addToFavorites" : "removeFromFavorites";
      dispatch({
        type,
        movieId,
        _id,
      });
    }
  }, [isChecked, _id, dispatch, movieId]);

  async function handleChange(e) {
    e.preventDefault();

    const previousisChecked = isChecked;
    setisChecked(!previousisChecked); // Switch checkbox optimistically

    try {
      if (previousisChecked) {
        await removeFavorite(_id);
        set_id(null);
      } else {
        const response = await addFavorite(
          movies.find((movie) => movie.movieId === movieId),
        );
        set_id(response.body._id);
      }
    } catch (err) {
      setisChecked(previousisChecked); // Return to previous checkbox state
    }
  }

  return [isChecked, handleChange];
}
