import Section from "../Section";

import "./Portfolio.css";
import Item from "./components/Item";

export default function AboutMe() {
  const links = {
    "Статичный сайт": "https://github.com/idegtyarenko/how-to-learn",
    "Адаптивный сайт": "https://github.com/idegtyarenko/russian-travel",
    "Одностраничное приложение":
      "https://github.com/idegtyarenko/react-mesto-api-full-gha",
  };
  return (
    <Section className="portfolio" aria-label="Портфолио">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {Object.entries(links).map(([text, href]) => (
          <Item key={text} href={href}>
            {text}
          </Item>
        ))}
      </ul>
    </Section>
  );
}
