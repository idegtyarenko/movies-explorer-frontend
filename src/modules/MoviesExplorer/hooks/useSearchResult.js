import { useEffect, useCallback, useState } from "react";

import { MOVIES_API_ROOT } from "../utils/constants";
import { formatDuration } from "../utils/utils";
import fetchMovies from "../utils/moviesApi";

export default function useSearchResult(query, displayNotification) {
  const [allMovies, setAllMovies] = useState([]);
  const [result, setResult] = useState([]);
  const text = query["query-text"];
  const isShortFilterOn = query["short-filter"];

  const displayDownloadError = useCallback(() => {
    const notification = {
      type: "error",
      title: "Не удалось загрузить список фильмов",
      text: "Сетевая ошибка",
    };
    displayNotification(notification);
  }, [displayNotification]);

  const filterMoviesByName = useCallback((movies, name) => {
    if (name) {
      return movies.filter(
        ({ nameRU, nameEN }) =>
          nameRU.toLowerCase().includes(name.toLowerCase()) ||
          nameEN.toLowerCase().includes(name.toLowerCase()),
      );
    } else {
      return movies;
    }
  }, []);

  const filterMoviesByLength = useCallback((movies, isFilterOn) => {
    if (isFilterOn) {
      return movies.filter(({ duration }) => duration <= 40);
    } else {
      return movies;
    }
  }, []);

  const filterMovies = useCallback(
    (movies) => {
      const filteredByName = filterMoviesByName(movies, text);
      const filteredByLength = filterMoviesByLength(
        filteredByName,
        isShortFilterOn,
      );
      return filteredByLength;
    },
    [text, isShortFilterOn, filterMoviesByName, filterMoviesByLength],
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
    if (text && !allMovies.length) {
      fetchMovies().then(setAllMovies).catch(displayDownloadError);
    }
    const moviesFiltered = filterMovies(allMovies);
    const extractedData = moviesFiltered.map(extractMovieData);
    setResult(extractedData);
  }, [text, displayDownloadError, allMovies, extractMovieData, filterMovies]);

  return { result, isLoading: !allMovies.length };
}
