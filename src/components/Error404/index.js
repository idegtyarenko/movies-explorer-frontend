import Link from "ui/Link";

import "./Error404.css";

export default function Error404() {
  return (
    <div className="error-404">
      <div className="error-404__text-wrapper">
        <h1 className="error-404__title">404</h1>
        <p className="error-404__description">Страница не найдена</p>
      </div>
      <div className="error-404__button-wrapper">
        <Link className="error-404__button link_color_button">Назад</Link>
      </div>
    </div>
  );
}
