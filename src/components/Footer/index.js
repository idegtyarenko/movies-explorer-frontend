import Section from "ui/Section";
import Link from "ui/Link";

import "./Footer.css";

const currentYear = new Date().getFullYear();
const acknowledgement = "Учебный проект Яндекс.Практикум х BeatFilm.";
const navLinks = {
  "Яндекс.Практикум": "https://practicum.yandex.ru",
  Github: "https://www.github.com/idegtyarenko/movies-explorer-frontend/",
};

export default function Footer() {
  return (
    <Section tagName="footer" className="footer">
      <p className="footer__acknowledgment">{acknowledgement}</p>
      <hr className="footer__separator" />
      <p className="footer__copyright">© {currentYear}</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          {Object.entries(navLinks).map(([text, href]) => (
            <li key={text}>
              <Link to={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
