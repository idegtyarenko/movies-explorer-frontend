import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation">
      {isLoggedIn && <Sections />}
      {isLoggedIn ? <ProfileButton /> : <AuthButtons />}
    </nav>
  );
}

function Sections() {
  return (
    <ul className="navigation__list navigation__sections">
      <li>
        <NavLink className="navigation__link_mobile-only" to="/">
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies">Фильмы</NavLink>
      </li>
      <li>
        <NavLink to="/saved-movies">Сохранённые фильмы</NavLink>
      </li>
    </ul>
  );
}

function ProfileButton() {
  return (
    <NavLink
      className="navigation__link_icon_profile navigation__link_weight_medium"
      to="/profile"
    >
      Аккаунт
    </NavLink>
  );
}

function AuthButtons() {
  return (
    <ul className="navigation__list navigation__auth">
      <li>
        <NavLink
          className="navigation__link_weight_medium navigation__link_size_s"
          to="/signup"
        >
          Регистрация
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigation__link_appearance_button navigation__link_weight_medium navigation__link_size_s"
          to="/signin"
        >
          Войти
        </NavLink>
      </li>
    </ul>
  );
}

function NavLink({ className, to, children }) {
  const defaultClasses = "navigation__link opacity-on-hover";
  const classes = className
    ? [defaultClasses, className].join(" ")
    : defaultClasses;
  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
