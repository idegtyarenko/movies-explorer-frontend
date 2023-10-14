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
    setResult(allMovies.map(extractMovieData));
  }, [query, displayDownloadError, allMovies, extractMovieData]);

  return { result, isLoading: !allMovies.length };
}
