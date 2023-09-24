import Link from "components/Link";

import "./Item.css";

export default function Item({ href, children }) {
  return (
    <li className="portfolio__item">
      <Link className="portfolio__link" to={href}>
        {children}
      </Link>
    </li>
  );
}
