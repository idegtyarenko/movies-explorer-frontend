import { useState } from "react";

import { loadSearchData, saveSearchData } from "utils/utils";
import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMovies from "./hooks/useMovies";
import { filterMovies, getStatus, Status } from "./utils/utils";
import MovieCardsGrid from "./components/MovieCardsGrid";
import Error from "./components/Error";

export { MoviesDataProvider } from "./store";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const previousSearchData = loadSearchData();
  const emptyQuery = { "query-text": "", "short-filter": false };
  const initialQuery = !isSavedMovies
    ? previousSearchData?.query ?? emptyQuery
    : emptyQuery;
  const [query, setQuery] = useState(initialQuery);

  const [submitCount, setSubmitCount] = useState(0);
  const { moviesData, error, isLoading } = useMovies(
    submitCount,
    isSavedMovies,
  );
  const result =
    submitCount || isSavedMovies
      ? filterMovies(moviesData, query, isSavedMovies)
      : previousSearchData?.result;

  const searchStatus = getStatus({
    isLoading,
    error,
    query,
    result,
    isSavedMovies,
  });

  if (!isSavedMovies) {
    saveSearchData({ query, result });
  }

  const handleSubmit = (formValues) => {
    setQuery(formValues);
    setSubmitCount((oldValue) => oldValue + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} initialQuery={query} />
      {searchStatus === Status.LOADING && <Preloader />}
      {searchStatus === Status.FOUND && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {searchStatus === Status.ERROR && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
