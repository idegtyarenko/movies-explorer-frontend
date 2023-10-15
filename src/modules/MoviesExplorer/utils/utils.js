import { MOVIES_API_ROOT } from "./constants";

export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours ? `${hours}ч` : "";
  const minutesString = `${minutes}м`;
  return hoursString + minutesString;
}

export function adaptMovie(rawMovie) {
  const { id, image, nameRU, nameEN, duration, trailerLink } = rawMovie;
  return {
    id,
    imageUrl: MOVIES_API_ROOT + image.url,
    name: nameRU,
    nameEN,
    duration,
    durationString: formatDuration(duration),
    trailerLink,
  };
}

export const filterMovies = (movies, query) =>
  movies.filter((movie) => {
    const text = query["query-text"];
    const isShort = query["short-filter"];
    const matchesText =
      movie.name.toLowerCase().includes(text.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(text.toLowerCase());
    const matchesDuration = !isShort || movie.duration <= 40;
    return matchesText && matchesDuration;
  });

const Status = {
  AWAITING: "awaiting",
  LOADING: "loading",
  FOUND: "found",
  ERROR: "error",
};

export const getStatus = (query, isLoading, result) => {
  return [
    !query["query-text"]
      ? Status.AWAITING
      : isLoading
      ? Status.LOADING
      : !!result.length
      ? Status.FOUND
      : Status.ERROR,
    Status,
  ];
};
