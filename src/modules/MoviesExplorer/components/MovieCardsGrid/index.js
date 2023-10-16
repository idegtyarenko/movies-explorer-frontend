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
            <RemoveButton movieId={movie.movieId} />
          ) : (
            <LikeButton movieId={movie.movieId} />
          );
          return (
            <MovieCard key={movie.movieId} movie={movie} button={button} />
          );
        })}
      </ul>
    </Section>
  );
}
