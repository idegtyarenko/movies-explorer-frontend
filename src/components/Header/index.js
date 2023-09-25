import { SectionWithWrapper } from "ui/Section";
import Logo from "ui/Logo";

import Navigation from "./components/Navigation";
import Burger from "./components/Burger";
import AuthButtons from "./components/AuthButtons";

import "./Header.css";

export default function Header({ isLoggedIn }) {
  return (
    <SectionWithWrapper
      wrapperClassName="header"
      className="header__wrapper section_mobile-margins_m section_no-auto-width"
    >
      <Logo />
      {isLoggedIn ? (
        <>
          <Navigation isMenuOpen={false} />
          <Burger />
        </>
      ) : (
        <AuthButtons />
      )}
    </SectionWithWrapper>
  );
}
