import Section from "ui/Section";
import LikeButton from "ui/LikeButton";

import "./MovieCardsGrid.css";
import RemoveButton from "./components/RemoveButton";
import MovieCard from "./components/MovieCard";

export default function MovieCardsGrid({ isSavedMovies, movies }) {
  const button = isSavedMovies ? <RemoveButton /> : <LikeButton />;

  return (
    <Section>
      <ul className="movie-cards-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} button={button} />
        ))}
      </ul>
    </Section>
  );
}
