import Section from "../Section";
import SectionTitle from "../SectionTitle";

import "./AboutProject.css";
import Factoid from "./components/Factoid";
import Timeline from "./components/Timeline";

export default function AboutProject() {
  return (
    <Section
      className="about-project section_tablet-margins_l section_mobile-margins_l"
      aria-label="О проекте"
    >
      <SectionTitle>О проекте</SectionTitle>
      <div className="about-project__factoids">
        <Factoid
          name="Дипломный проект включал 5 этапов"
          description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        />
        <Factoid
          name="На выполнение диплома ушло 5 недель"
          description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        />
      </div>
      <Timeline />
    </Section>
  );
}
