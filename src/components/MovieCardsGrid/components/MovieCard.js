import Card from "ui/Card";

export default function MovieCard({ movie, button }) {
  const { imageUrl, name, duration } = movie;

  return (
    <Card
      image={imageUrl}
      name={name}
      altText="Обложка фильма"
      label={duration}
      button={button}
    />
  );
}
