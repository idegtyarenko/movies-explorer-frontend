import "./Factoid.css";

export default function Factoid({ name, description }) {
  return (
    <div className="factoid">
      <p className="factoid__name">{name}</p>
      <p className="factoid__description">{description}</p>
    </div>
  );
}
