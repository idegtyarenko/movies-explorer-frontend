import Section from "ui/Section";

import "./Error.css";

export default function Error({ error }) {
  const title = error
    ? "Во время запроса произошла ошибка"
    : "Ничего не найдено";
  const text = error
    ? "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    : "";
  return (
    <Section className="movies-explorer-error">
      <p className="movies-explorer-error__title">{title}</p>
      {!!text && <p className="movies-explorer-error__text">{text}</p>}
    </Section>
  );
}
