import { useState } from "react";

import MovieCardsGrid from "components/MovieCardsGrid";
import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMoviesData from "./hooks/useMoviesData";
import { filterMovies } from "./utils/utils";
import Error from "./components/Error";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({ searchCount: 0 });
  const { movies, error, isLoading } = useMoviesData(query);
  const result = filterMovies(movies, query);

  const status = !query["query-text"]
    ? "awaiting"
    : isLoading
    ? "loading"
    : !!result.length
    ? "found"
    : "error";

  const handleSubmit = (formValues) => {
    setQuery({
      ...formValues,
      searchCount: query.searchCount + 1, // Changes query to restart downloading on retry after error
    });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {status === "loading" && <Preloader />}
      {status === "found" && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {status === "error" && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
