import Section from "../Section";
import SectionTitle from "../SectionTitle";

import "./AboutProject.css";
import "./Factoid.css";
import "./Timeline.css";

export default function AboutProject() {
  return (
    <Section className="about-project">
      <SectionTitle>О проекте</SectionTitle>
      <div className="about-project__factoids">
        <Factoid
          name="Дипломный проект включал 5 этапов"
          description="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        />
        <Factoid
          name="На выполнение диплома ушло 5 недель"
          description="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        />
      </div>
      <Timeline />
    </Section>
  );
}

function Factoid({ name, description }) {
  return (
    <div className="factoid">
      <p className="factoid__name">{name}</p>
      <p className="factoid__description">{description}</p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__segment">
        <p className="timeline__bar timeline__bar_highlighted">1 неделя</p>
        <p className="timeline__caption">Back-end</p>
      </div>
      <div className="timeline__segment">
        <p className="timeline__bar">4 недели</p>
        <p className="timeline__caption">Front-end</p>
      </div>
    </div>
  );
}
