import Card from "ui/Card";

export default function MovieCard({ movie, button }) {
  const { imageUrl, name, duration, trailerLink } = movie;

  return (
    <Card
      image={imageUrl}
      name={name}
      altText="Обложка фильма"
      label={duration}
      trailerLink={trailerLink}
      button={button}
    />
  );
}
