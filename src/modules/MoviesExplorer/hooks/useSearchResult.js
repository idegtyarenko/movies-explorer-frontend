import { useEffect, useCallback, useState } from "react";

import { MOVIES_API_ROOT } from "../utils/constants";
import { formatDuration } from "../utils/utils";
import fetchMovies from "../utils/moviesApi";

export default function useSearchResult(query, displayNotification) {
  const [allMovies, setAllMovies] = useState([]);
  const [result, setResult] = useState([]);

  const displayDownloadError = useCallback(() => {
    const notification = {
      type: "error",
      title: "Не удалось загрузить список фильмов",
      text: "Сетевая ошибка",
    };
    displayNotification(notification);
  }, [displayNotification]);

  const filterMoviesByName = useCallback(
    (movies, name) =>
      movies.filter(
        ({ nameRU, nameEN }) =>
          nameRU.toLowerCase().includes(name.toLowerCase()) ||
          nameEN.toLowerCase().includes(name.toLowerCase()),
      ),
    [],
  );

  const filterMovies = useCallback(
    (movies) => {
      console.log("filtering movies by query: " + query.text);
      const text = query["query-text"];
      const filteredByName = text ? filterMoviesByName(movies, text) : movies;
      return filteredByName;
    },
    [query, filterMoviesByName],
  );

  const extractMovieData = useCallback((rawMovie) => {
    const { id, image, nameRU, duration, trailerLink } = rawMovie;
    return {
      id,
      imageUrl: MOVIES_API_ROOT + image.url,
      name: nameRU,
      duration: formatDuration(duration),
      trailerLink,
    };
  }, []);

  useEffect(() => {
    if (!allMovies.length) {
      fetchMovies().then(setAllMovies).catch(displayDownloadError);
    }
    const moviesFiltered = filterMovies(allMovies);
    const extractedData = moviesFiltered.map(extractMovieData);
    setResult(extractedData);
  }, [query, displayDownloadError, allMovies, extractMovieData, filterMovies]);

  return { result, isLoading: !allMovies.length };
}
