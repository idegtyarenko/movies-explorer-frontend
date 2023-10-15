import { useState } from "react";

import MovieCardsGrid from "components/MovieCardsGrid";
import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMoviesData from "./hooks/useMoviesData";
import { filterMovies, getStatus } from "./utils/utils";
import Error from "./components/Error";

export { MoviesProvider } from "./store";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({ searchCount: 0 });
  const { movies, error, isLoading } = useMoviesData(query);
  const result = filterMovies(movies, query);
  const [status, Status] = getStatus(query, isLoading, result);

  const handleSubmit = (formValues) => {
    setQuery({
      ...formValues,
      searchCount: query.searchCount + 1, // Changes query to restart downloading on retry after error
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {status === Status.LOADING && <Preloader />}
      {status === Status.FOUND && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {status === Status.ERROR && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
