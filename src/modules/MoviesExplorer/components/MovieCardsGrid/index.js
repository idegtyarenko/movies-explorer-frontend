import Section from "ui/Section";

import RemoveButton from "../RemoveButton";
import LikeButton from "../LikeButton";
import MovieCard from "../MovieCard";
import "./MovieCardsGrid.css";

export default function MovieCardsGrid({ isSavedMovies, movies }) {
  return (
    <Section>
      <ul className="movie-cards-grid">
        {movies.map((movie) => {
          const button = isSavedMovies ? (
            <RemoveButton movieId={movie.id} />
          ) : (
            <LikeButton movieId={movie.id} />
          );
          return <MovieCard key={movie.id} movie={movie} button={button} />;
        })}
      </ul>
    </Section>
  );
}
