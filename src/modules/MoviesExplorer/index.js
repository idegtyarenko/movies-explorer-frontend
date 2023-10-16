import { useState } from "react";

import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMovies from "./hooks/useMovies";
import { filterMovies } from "./utils/utils";
import MovieCardsGrid from "./components/MovieCardsGrid";
import Error from "./components/Error";

export { MoviesDataProvider } from "./store";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({ "query-text": "", searchCount: 0 });
  const { moviesData, error, isLoading } = useMovies(query, isSavedMovies);
  const result = filterMovies(moviesData, query, isSavedMovies);

  const handleSubmit = (formValues) => {
    setQuery({
      ...formValues,
      searchCount: query.searchCount + 1, // Changes query to restart downloading on retry after error
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Preloader />}
      {!!result.length && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {error && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
