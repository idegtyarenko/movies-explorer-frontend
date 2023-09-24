import Section from "ui/Section";
import SectionTitle from "ui/SectionTitle";
import Link from "ui/Link";
import photo from "images/ivan.webp";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <Section
      className="about-me section_tablet-margins_l section_mobile-margins_m"
      aria-label="Студент"
    >
      <SectionTitle>Студент</SectionTitle>
      <div className="about-me__text">
        <h3 className="about-me__name">Иван</h3>
        <p className="about-me__tagline">Менеджер продукта, 37 лет</p>
        <p className="about-me__bio">
          Я менеджер продукта. До недавнего времени работал в сервисе Яндекса
          «Едадил», где запускал конструктор backend-driven UI, управлял главной
          страницей сервиса и проектировал UX раздела кэшбэков. До этого около
          10 лет занимался UX‑проектированием и user research. Живу в Оксфорде.
          Кандидат психологических наук. Люблю блюз и губную гармонику,
          лингвистику, путешествия на яхтах, сноуборд.
        </p>
        <Link className="about-me__link" to="https://github.com/idegtyarenko">
          GitHub
        </Link>
      </div>
      <img className="about-me__photo" alt="Фото Ивана" src={photo} />
    </Section>
  );
}
