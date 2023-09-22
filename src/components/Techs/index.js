import SectionWithBackground from "../SectionWithBackground";
import SectionTitle from "../SectionTitle";

import "./Techs.css";
import TechItem from "./components/TechItem";

export default function Techs() {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <SectionWithBackground
      backgroundColor="var(--color-background-secondary)"
      aria-label="Технологии"
      className="techs"
    >
      <SectionTitle>Технологии</SectionTitle>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили
        в дипломном проекте.
      </p>
      <ul className="techs__list">
        {techs.map((item) => (
          <TechItem>{item}</TechItem>
        ))}
      </ul>
    </SectionWithBackground>
  );
}
