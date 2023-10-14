import { useState } from "react";

import MovieCardsGrid from "components/MovieCardsGrid";
import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

import useMoviesData from "./hooks/useMoviesData";
import { filterMovies } from "./utils/utils";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const [query, setQuery] = useState({ searchCount: 0 });
  const { movies, error, isLoading } = useMoviesData(query);

  const handleSubmit = (formValues) => {
    setQuery({
      ...formValues,
      searchCount: query.searchCount + 1, // Changes query to restart downloading on retry after error
    });
  };

  const result = filterMovies(movies, query);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Preloader />}
      {error && <p>Ошибка загрузки</p>}
      {!!movies.length && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      <PaginationControl />
    </>
  );
}
