import "./Item.css";

export default function Item({ href, children }) {
  return (
    <li className="portfolio__item">
      <a
        className="portfolio__link opacity-on-hover"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
