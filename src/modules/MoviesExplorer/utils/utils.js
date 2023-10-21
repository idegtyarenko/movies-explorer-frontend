import { MOVIES_API_ROOT } from "../utils/constants";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  FOUND: "found",
  PENDING: "pending",
};

export function getStatus({ isLoading, error, query, result, isSavedMovies }) {
  const text = query ? query["query-text"] : "";
  const isFilterOn = query ? query["short-filter"] : false;
  const isQuerySet = text || (isSavedMovies && isFilterOn);
  const isEmptyResult = !result || !result.length;
  if (isLoading) {
    return Status.LOADING;
  }
  if (error || (isQuerySet && isEmptyResult)) {
    return Status.ERROR;
  }
  if (!text && !isSavedMovies) {
    return Status.PENDING;
  }
  return Status.FOUND;
}

export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours ? `${hours}ч` : "";
  const minutesString = `${minutes}м`;
  return hoursString + minutesString;
}

export const filterMovies = (moviesData, query, isSavedMovies) =>
  moviesData.movies.filter((movie) => {
    const text = query ? query["query-text"] : "";
    const isShort = query ? query["short-filter"] : false;
    const matchesText =
      movie.nameRU.toLowerCase().includes(text.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(text.toLowerCase()) ||
      (isSavedMovies && !text);
    const matchesDuration = !isShort || movie.duration <= 40;
    const matchesFavoriteStatus =
      !isSavedMovies ||
      Object.keys(moviesData.favorites).includes(movie.movieId.toString());
    return matchesText && matchesDuration && matchesFavoriteStatus;
  });

export function mapApiMovieToAppModel(apiMovie) {
  return {
    movieId: apiMovie.id,
    nameRU: apiMovie.nameRU,
    nameEN: apiMovie.nameEN,
    director: apiMovie.director,
    country: apiMovie.country,
    year: apiMovie.year,
    duration: apiMovie.duration,
    description: apiMovie.description,
    trailerLink: apiMovie.trailerLink,
    image: MOVIES_API_ROOT + apiMovie.image.url,
    thumbnail: MOVIES_API_ROOT + apiMovie.image.formats.thumbnail.url,
  };
}

export function mapApiFavoriteToAppModel({
  movieId,
  nameRU,
  nameEN,
  director,
  country,
  year,
  duration,
  description,
  trailerLink,
  image,
  thumbnail,
}) {
  return {
    movieId,
    nameRU,
    nameEN,
    director,
    country,
    year,
    duration,
    description,
    trailerLink,
    image,
    thumbnail,
  };
}
