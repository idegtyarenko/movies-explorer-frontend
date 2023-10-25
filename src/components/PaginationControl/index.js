import Link from "ui/Link";
import Section from "ui/Section";

import "./PaginationControl.css";

export default function PaginationControl({ onClick }) {
  return (
    <Section className="pagination-control">
      <Link className="pagination-control__button" onClick={onClick}>
        Ещё
      </Link>
    </Section>
  );
}
