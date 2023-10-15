import { useState, useEffect } from "react";

import { addFavorite, removeFavorite } from "utils/mainApi";

import { useMovies, useMoviesDispatch } from "../../../store";

export default function useFavoriteStatus(movieId) {
  const { favorites, allMovies } = useMovies();
  const [everClicked, setEverClicked] = useState(false);
  const dispatch = useMoviesDispatch();

  const [isFavorite, setIsFavorite] = useState(favorites.includes(movieId));

  useEffect(() => {
    if (!everClicked) {
      return;
    }
    const type = isFavorite ? "addToFavorites" : "removeFromFavorites";
    dispatch({
      type,
      movieId,
    });
  }, [isFavorite, everClicked, dispatch, movieId]);

  async function handleChange(e) {
    e.preventDefault();
    setEverClicked(true);
    const previousIsChecked = isFavorite;
    setIsFavorite(!previousIsChecked);

    try {
      if (previousIsChecked) {
        await removeFavorite(movieId);
      } else {
        await addFavorite(allMovies.find((movie) => movie.id === movieId));
      }
    } catch (err) {
      setIsFavorite(previousIsChecked);
    }
  }

  return [isFavorite, handleChange];
}
