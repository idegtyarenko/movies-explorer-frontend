export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours ? `${hours}ч` : "";
  const minutesString = `${minutes}м`;
  return hoursString + minutesString;
}

export const filterMovies = (moviesData, query, isSavedMovies) =>
  moviesData.movies.filter((movie) => {
    const text = query["query-text"];
    const isShort = query["short-filter"];
    const matchesText =
      movie.nameRU.toLowerCase().includes(text.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(text.toLowerCase()) ||
      (isSavedMovies && !text);
    const matchesDuration = !isShort || movie.duration <= 40;
    const matchesFavoriteStatus =
      !isSavedMovies ||
      Object.keys(moviesData.favorites).includes(movie.movieId.toString());
    if (matchesText && matchesDuration && matchesFavoriteStatus) {
    }
    return matchesText && matchesDuration && matchesFavoriteStatus;
  });
