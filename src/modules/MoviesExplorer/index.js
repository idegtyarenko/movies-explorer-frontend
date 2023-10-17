import { useState } from "react";

import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMovies from "./hooks/useMovies";
import { filterMovies, getStatus, Status } from "./utils/utils";
import MovieCardsGrid from "./components/MovieCardsGrid";
import Error from "./components/Error";

export { MoviesDataProvider } from "./store";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({ "query-text": "", searchCount: 0 });
  const { moviesData, error, isLoading } = useMovies(query, isSavedMovies);
  const result = filterMovies(moviesData, query, isSavedMovies);
  const searchStatus = getStatus({
    isLoading,
    error,
    query,
    result,
    isSavedMovies,
  });

  const handleSubmit = (formValues) => {
    setQuery({
      ...formValues,
      searchCount: query.searchCount + 1, // Changes query to restart downloading on retry after error
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {searchStatus === Status.LOADING && <Preloader />}
      {searchStatus === Status.FOUND && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {searchStatus === Status.ERROR && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
