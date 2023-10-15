import { useState, useEffect } from "react";

import { addFavorite, removeFavorite } from "utils/mainApi";

import { useMovies, useMoviesDispatch } from "../../store";
import "./LikeButton.css";

export default function LikeButton({ movieId }) {
  const movies = useMovies();
  const dispatch = useMoviesDispatch();

  const movieData = movies.list.find((movie) => movie.id === movieId);
  const [isChecked, setIsChecked] = useState(movieData.isFavorite);

  useEffect(() => {
    dispatch({
      type: "updateFavoriteStatus",
      movieId,
      isFavorite: isChecked,
    });
  }, [isChecked, dispatch, movieId]);

  async function handleChange(e) {
    e.preventDefault();
    setIsChecked((previousIsChecked) => !previousIsChecked);

    const result = isChecked
      ? await removeFavorite(movieId)
      : await addFavorite(movies.rawData.find((movie) => movie.id === movieId));

    if (!result.ok) {
      setIsChecked((previousIsChecked) => !previousIsChecked);
    }
  }

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
