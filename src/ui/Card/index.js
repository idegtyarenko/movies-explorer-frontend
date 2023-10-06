import "./Card.css";

export default function Card({ image, name, altText, label, button }) {
  return (
    <li className="card">
      <img className="card__image" src={image} alt={altText} />
      <div className="card__text">
        <p className="card__name">{name}</p>
        <p className="card__label">{label}</p>
      </div>
      <div className="card__button">{button}</div>
    </li>
  );
}
