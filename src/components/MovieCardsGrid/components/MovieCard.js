import Card from "ui/Card";

export default function MovieCard({ movie, button }) {
  const { imageUrl, name, durationString, trailerLink } = movie;

  return (
    <Card
      image={imageUrl}
      name={name}
      altText="Обложка фильма"
      label={durationString}
      trailerLink={trailerLink}
      button={button}
    />
  );
}
