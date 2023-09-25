import Link from "ui/Link";
import { joinClassNames } from "utils/utils";

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
        <li className="except-desktop">
          <Link className="navigation__link" to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className="navigation__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li>
          <Link className="navigation__link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link className="navigation__profile" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
}
