import { formatDuration } from "../../utils/utils";

import Card from "ui/Card";

export default function MovieCard({ movie, button }) {
  const { image, nameRU, duration, trailerLink, movieId } = movie;

  return (
    <Card
      id={movieId}
      image={image}
      name={nameRU}
      altText="Обложка фильма"
      label={formatDuration(duration)}
      trailerLink={trailerLink}
      button={button}
    />
  );
}
