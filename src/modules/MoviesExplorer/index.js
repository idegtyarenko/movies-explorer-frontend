import MovieCardsGrid from "components/MovieCardsGrid";
import SearchForm from "components/SearchForm";

export default function MoviesExplorer({ savedMovies = false }) {
  return (
    <>
      <SearchForm />
      <MovieCardsGrid savedMovies={savedMovies} />
    </>
  );
}
