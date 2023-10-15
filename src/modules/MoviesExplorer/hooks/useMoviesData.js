import { useCallback, useEffect, useState } from "react";

import { getFavorites } from "utils/mainApi";

import { useMovies, useMoviesDispatch } from "../store";
import fetchMovies from "../utils/moviesApi";

export default function useMoviesData(query) {
  const movies = useMovies();
  const dispatch = useMoviesDispatch();
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
    if (!movies.list.length) {
      setError(null);
      setIsLoading(true);
      fetchData();
    }
  }, [query, movies.list.length, fetchData]);

  return { movies: movies.list, error, isLoading };
}
