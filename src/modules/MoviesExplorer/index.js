import { useState } from "react";

import MovieCardsGrid from "components/MovieCardsGrid";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";
import { useDisplayNotification } from "modules/ContentWithNotifications";

import useSearchResult from "./hooks/useSearchResult";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({});
  const displayNotification = useDisplayNotification();

  const { result: movies, isLoaded } = useSearchResult(
    query,
    displayNotification,
  );

  const handleSubmit = (formValues) => {
    setQuery(formValues);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MovieCardsGrid movies={movies} isSavedMovies={isSavedMovies} />
      <PaginationControl />
    </>
  );
}
