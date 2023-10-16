import { useCallback, useEffect, useState } from "react";

import { getFavorites } from "utils/mainApi";

import { useMoviesData, useMoviesDataDispatch } from "../store";
import fetchMovies from "../utils/moviesApi";

export default function useMovies(query, isSavedMovies) {
  const moviesData = useMoviesData();
  const dispatch = useMoviesDataDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const [allMovies, favorites] = await Promise.all([
      fetchMovies(),
      getFavorites(),
    ]);
    if (allMovies.ok && favorites.ok) {
      dispatch({
        type: "set",
        allMovies: allMovies.body,
        favorites: favorites.body,
      });
    } else {
      setError(allMovies.message || favorites.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!query["query-text"]) {
      return;
    }
    if (!moviesData.movies.length) {
      setError(null);
      setIsLoading(true);
      fetchData();
    }
  }, [query, moviesData.movies.length, fetchData]);

  return { moviesData, error, isLoading };
}
