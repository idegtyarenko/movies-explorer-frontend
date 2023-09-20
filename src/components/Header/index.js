import Logo from "../Logo";
import Navigation from "../Navigation";
import Menu from "../Menu";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Menu />
    </header>
  );
}
