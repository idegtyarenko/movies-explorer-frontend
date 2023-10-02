import { React, useEffect, useState, useCallback } from "react";

import { SectionWithWrapper } from "ui/Section";
import Logo from "ui/Logo";

import Navigation from "./components/Navigation";
import Burger from "./components/Burger";
import AuthButtons from "./components/AuthButtons";

import "./Header.css";

export default function Header({ isLoggedIn }) {
  const checkIfDesktop = useCallback(() => window.innerWidth > 768, []);
  const [isDesktop, setIsDesktop] = useState(checkIfDesktop());

  useEffect(() => {
    const handleResize = () => setIsDesktop(checkIfDesktop());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIfDesktop]);

  return (
    <SectionWithWrapper
      tagName="header"
      wrapperClassName="header"
      className="header__wrapper section_mobile-margins_m"
    >
      <Logo className="header__logo" />
      {isLoggedIn ? (
        <>
          <Navigation key={isDesktop} isMenuOpen={false} />
          <Burger />
        </>
      ) : (
        <AuthButtons />
      )}
    </SectionWithWrapper>
  );
}
