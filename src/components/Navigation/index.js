import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({ isLoggedIn = true }) {
  return (
    <nav className="navigation">
      {isLoggedIn && (
        <ul className="navigation__sections">
          <li>
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="navigation__link">
            <Link className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
      )}
      {isLoggedIn ? (
        <Link className="navigation__account" to="/profile">
          <p className="navigation__link navigation__link_icon_account">
            Аккаунт
          </p>
        </Link>
      ) : (
        <ul className="navigation__account">
          <li>
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              className="navigation__link navigation__link_appearance_button"
              to="/signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
