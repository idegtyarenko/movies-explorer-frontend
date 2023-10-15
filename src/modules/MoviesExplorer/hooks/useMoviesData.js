import { useEffect, useState } from "react";

import { useMovies, useMoviesDispatch } from "../store";
import fetchMovies from "../utils/moviesApi";

export default function useMoviesData(query) {
  const movies = useMovies();
  const dispatch = useMoviesDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query["query-text"]) {
      return;
    }
    if (!movies.list.length) {
      setError(null);
      setIsLoading(true);
      fetchMovies()
        .then((res) => {
          dispatch({
            type: "set",
            data: res,
          });
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [query, movies.list.length, dispatch]);

  return { movies: movies.list, error, isLoading };
}
