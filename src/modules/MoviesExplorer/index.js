import { useState } from "react";

import MovieCardsGrid from "components/MovieCardsGrid";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

export default function MoviesExplorer({ savedMovies = false }) {
  // loading, movies,
  const [query, setQuery] = useState({});

  const handleSubmit = (formValues) => {
    setQuery(formValues);
  };

  return (
    <>
      <p>{query["query-text"]}</p>
      <p>{query["short-filter"] && query["short-filter"].toString()}</p>
      <SearchForm onSubmit={handleSubmit} />
      <MovieCardsGrid savedMovies={savedMovies} />
      <PaginationControl />
    </>
  );
}
