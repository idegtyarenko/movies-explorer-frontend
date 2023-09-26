import Link from "ui/Link";

import "./HintLink.css";

export default function HintLink({ text, buttonText, to }) {
  return (
    <div className="hint-link">
      <p className="hint-link__text">{text}</p>
      <Link className="hint-link__link link_color_button" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}
