import { SectionWithWrapper } from "ui/Section";
import Link from "ui/Link";
import illustration from "images/globe.webp";

import "./Promo.css";

export default function Promo() {
  return (
    <SectionWithWrapper
      className="promo"
      backgroundColorName="promo"
      aria-label="Заглавие сайта"
    >
      <div className="promo__text">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className="promo__button" to="#about-project">
          Узнать больше
        </Link>
      </div>
      <img
        alt="Иллюстрация: глобус, состоящий из надписей WEB"
        className="promo__illustration"
        src={illustration}
      />
    </SectionWithWrapper>
  );
}
