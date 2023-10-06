import Link from "ui/Link";

import "./AuthButtons.css";

export default function AuthButtons() {
  return (
    <ul className="auth-buttons">
      <li>
        <Link className="auth-buttons__link" to="/signup">
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          className="auth-buttons__link auth-buttons__link_has-background"
          to="/signin"
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}
