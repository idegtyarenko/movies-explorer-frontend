import Link from "ui/Link";

import "./Card.css";

export default function Card({
  id,
  image,
  name,
  altText,
  label,
  trailerLink,
  button,
}) {
  return (
    <li className="card" id={id}>
      <Link to={trailerLink} className="card__link">
        <img className="card__image" src={image} alt={altText} />
        <div className="card__text">
          <p className="card__name">{name}</p>
          <p className="card__label">{label}</p>
        </div>
        <div className="card__button">{button}</div>
      </Link>
    </li>
  );
}
