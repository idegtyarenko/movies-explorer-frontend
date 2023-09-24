import SectionWithBackground from "ui/SectionWithBackground";
import SectionTitle from "ui/SectionTitle";

import "./Techs.css";
import TechItem from "./components/TechItem";

export default function Techs() {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <SectionWithBackground
      backgroundColor="var(--color-background-secondary)"
      aria-label="Технологии"
      className="techs section_tablet-margins_l section_mobile-margins_l"
    >
      <SectionTitle>Технологии</SectionTitle>
      <p className="techs__title">7 технологий</p>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили
        в дипломном проекте.
      </p>
      <ul className="techs__list">
        {techs.map((item) => (
          <TechItem key={item}>{item}</TechItem>
        ))}
      </ul>
    </SectionWithBackground>
  );
}
