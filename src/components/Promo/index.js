import SectionWithBackground from "../SectionWithBackground";
import illustration from "../../images/globe.svg";

import "./Promo.css";

export default function Promo() {
  return (
    <SectionWithBackground
      className="promo"
      aria-label="Заглавие сайта"
      backgroundColor="var(--color-background-promo)"
    >
      <div className="promo__text">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className="promo__button" href="#about">
          Узнать больше
        </a>
      </div>
      <img
        alt="Иллюстрация: глобус, состоящий из надписей WEB"
        className="promo__illustration"
        src={illustration}
      />
    </SectionWithBackground>
  );
}