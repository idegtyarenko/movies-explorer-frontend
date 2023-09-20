import Section from "../Section";
import NavItem from "./NavItem";
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
            <NavItem key={text} href={href}>
              {text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
