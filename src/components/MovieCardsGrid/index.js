import Card from "ui/Card";
import poster from "images/poster-example.webp";

import "./MovieCardsGrid.css";
import Section from "ui/Section";
import LikeButton from "ui/LikeButton";

export default function MovieCardsGrid() {
  const exampleCard = (
    <Card
      image={poster}
      name="33 слова о дизайне"
      altText="Обложка фильма"
      label="1ч42м"
      button={<LikeButton />}
    />
  );
  const cards = Array(16).fill(exampleCard);

  return (
    <Section className="section_mobile-margins_m">
      <div className="movie-cards-grid">{cards.map((card) => card)}</div>
    </Section>
  );
}
