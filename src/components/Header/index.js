import Section from "../Section";
import Logo from "../Logo";
import Navigation from "../Navigation";

import Burger from "./components/Burger";

import "./Header.css";

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Section className="header__wrapper section_mobile-margins_m section_no-auto-width">
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn && <Burger />}
      </Section>
    </header>
  );
}
