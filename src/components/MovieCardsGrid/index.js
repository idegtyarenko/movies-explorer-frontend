import Card from "ui/Card";
import Section from "ui/Section";
import LikeButton from "ui/LikeButton";
import poster from "images/poster-example.webp";

import RemoveButton from "./components/RemoveButton";
import "./MovieCardsGrid.css";

export default function MovieCardsGrid({ savedMovies }) {
  const exampleCard = (
    <Card
      image={poster}
      name="33 слова о дизайне"
      altText="Обложка фильма"
      label="1ч42м"
      button={savedMovies ? <RemoveButton /> : <LikeButton />}
    />
  );
  const cards = Array(16).fill(exampleCard);

  return (
    <Section>
      <div className="movie-cards-grid">{cards.map((card) => card)}</div>
    </Section>
  );
}
