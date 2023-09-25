import Link from "ui/Link";
import { joinClassNames } from "utils/utils";

import Section from "./components/Section";
import "./Navigation.css";

export default function Navigation({ isMenuOpen }) {
  return (
    <nav
      className={joinClassNames([
        "navigation",
        isMenuOpen && "navigation_is-menu-open",
      ])}
    >
      <ul className="navigation__sections">
        <Section className="except-desktop" to="/">
          Главная
        </Section>
        <Section to="/movies">Фильмы</Section>
        <Section to="/saved-movies">Сохранённые фильмы</Section>
      </ul>
      <Link className="navigation__profile" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
}
