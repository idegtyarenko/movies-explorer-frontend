import Link from "ui/Link";
import { joinClassNames } from "utils/utils.js";

import "./Navigation.css";

export default function Navigation({ isLoggedIn }) {
  return (
    <nav
      className={joinClassNames([
        "navigation",
        isLoggedIn ? "navigation_is-logged-in" : null,
      ])}
    >
      {isLoggedIn && <Sections />}
      {isLoggedIn ? <ProfileButton /> : <AuthButtons />}
    </nav>
  );
}

function Sections() {
  return (
    <ul className="navigation__list navigation__sections">
      <li>
        <Link className="navigation__link_mobile-only" to="/">
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
  );
}

function ProfileButton() {
  return (
    <Link
      className="navigation__link navigation__link_icon_profile navigation__link_weight_medium"
      to="/profile"
    >
      Аккаунт
    </Link>
  );
}

function AuthButtons() {
  return (
    <ul className="navigation__list navigation__auth">
      <li>
        <Link
          className="navigation__link navigation__link_weight_medium navigation__link_size_s"
          to="/signup"
        >
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          className="navigation__link navigation__link_appearance_button navigation__link_weight_medium navigation__link_size_s"
          to="/signin"
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}
