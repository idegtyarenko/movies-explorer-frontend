import { useEffect, useState } from "react";

import { getFavorites } from "utils/mainApi";

import { useMoviesData, useMoviesDataDispatch } from "../store";
import fetchMovies from "../utils/moviesApi";

export default function useMovies(query, isSavedMovies) {
  const moviesData = useMoviesData();
  const dispatch = useMoviesDataDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const allMovies = await fetchMovies();
        dispatch({
          type: "setAllMovies",
          data: allMovies,
        });
      } catch (err) {
        setError(err.message);
      }
    }

    async function fetchFavorites() {
      try {
        const favorites = await getFavorites();
        dispatch({
          type: "setFavorites",
          data: favorites,
        });
      } catch (err) {
        setError(err.message);
      }
    }

    if (isSavedMovies && !moviesData.isFavoritesDownloaded) {
      setError(null);
      setIsLoading(true);
      fetchFavorites().then(() => {
        setIsLoading(false);
      });
    }

    if (
      !isSavedMovies &&
      query["query-text"] &&
      !moviesData.isAllMoviesDownloaded
    ) {
      setError(null);
      setIsLoading(true);
      fetchAllMovies().then(() => {
        setIsLoading(false);
      });
    }
  }, [
    dispatch,
    query,
    moviesData.isAllMoviesDownloaded,
    moviesData.isFavoritesDownloaded,
    isSavedMovies,
  ]);

  return { moviesData, error, isLoading };
}
