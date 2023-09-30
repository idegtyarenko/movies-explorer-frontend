import MovieCardsGrid from "components/MovieCardsGrid";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";

export default function MoviesExplorer({ savedMovies = false }) {
  return (
    <>
      <SearchForm />
      <MovieCardsGrid savedMovies={savedMovies} />
      <PaginationControl />
    </>
  );
}
