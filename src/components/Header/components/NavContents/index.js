import Section from "./components/Section";
import Profile from "./components/Profile";
import "./NavContents.css";

export default function NavContents({ isMenuOpen }) {
  return (
    <>
      <ul className="navigation__sections">
        <Section className="except-desktop" to="/">
          Главная
        </Section>
        <Section to="/movies">Фильмы</Section>
        <Section to="/saved-movies">Сохранённые фильмы</Section>
      </ul>
      <Profile />
    </>
  );
}
