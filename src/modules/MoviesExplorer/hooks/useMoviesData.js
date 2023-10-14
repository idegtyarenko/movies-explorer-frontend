import { useEffect, useState } from "react";

import fetchMovies from "../utils/moviesApi";
import { adaptMovie } from "../utils/utils";

export default function useMoviesData(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query["query-text"]) {
      return;
    }
    if (!movies.length) {
      setError(null);
      setIsLoading(true);
      fetchMovies()
        .then((res) => {
          const adaptedMovies = res.map(adaptMovie);
          setMovies(adaptedMovies);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [query, movies.length]);

  return { movies, error, isLoading };
}
