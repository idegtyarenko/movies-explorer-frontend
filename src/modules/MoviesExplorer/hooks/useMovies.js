import { useEffect, useState } from "react";

import { getFavorites } from "utils/mainApi";

import { useMoviesData, useMoviesDataDispatch } from "../store";
import fetchMovies from "../utils/moviesApi";

export default function useMovies(submitCount, isSavedMovies) {
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

    const isAllMoviesSearchStarted = !isSavedMovies && submitCount;
    const fetchesNecessary = [];
    if (!moviesData.isAllMoviesDownloaded && isAllMoviesSearchStarted) {
      fetchesNecessary.push(fetchAllMovies());
    }
    if (!moviesData.isFavoritesDownloaded) {
      fetchesNecessary.push(fetchFavorites());
    }
    if (!fetchesNecessary.length) {
      return;
    }

    setError(null);
    setIsLoading(true);
    Promise.all(fetchesNecessary).then(() => {
      setIsLoading(false);
    });
  }, [
    dispatch,
    submitCount,
    moviesData.isAllMoviesDownloaded,
    moviesData.isFavoritesDownloaded,
    isSavedMovies,
  ]);

  return { moviesData, error, isLoading };
}
