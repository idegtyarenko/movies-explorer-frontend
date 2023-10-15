import { useState } from "react";

import { useCurrentUser } from "store/user";
import { SectionWithWrapper } from "ui/Section";
import Logo from "ui/Logo";

import DesktopNav from "./components/DesktopNav";
import TouchNav from "./components/TouchNav";
import NavContents from "./components/NavContents";
import Burger from "./components/Burger";
import AuthButtons from "./components/AuthButtons";
import useIsDesktop from "./hooks/useIsDesktop";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const user = useCurrentUser();
  const isLoggedIn = "_id" in user;

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <SectionWithWrapper
      tagName="header"
      wrapperClassName="header"
      className="header__wrapper section_mobile-margins_m"
    >
      <Logo className="header__logo" />
      {isLoggedIn ? (
        <>
          {isDesktop ? (
            <DesktopNav>
              <NavContents />
            </DesktopNav>
          ) : (
            <TouchNav isMenuOpen={isMenuOpen} handleClose={handleMenuToggle}>
              <NavContents />
            </TouchNav>
          )}
          <Burger handleClick={handleMenuToggle} />
        </>
      ) : (
        <AuthButtons />
      )}
    </SectionWithWrapper>
  );
}
