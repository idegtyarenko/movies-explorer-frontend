import Section from "../Section";

import "./AboutProject.css";

function Factoid({ name, description }) {
  return (
    <div className="about-project__factoid">
      <p className="about-project__factoid-name">{name}</p>
      <p className="about-project__factoid-description">{description}</p>
    </div>
  );
}

export default function AboutProject() {
  return (
    <Section classes={["about-project"]}>
      <h2 className="about-project__title">О проекте</h2>
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
    </Section>
  );
}
