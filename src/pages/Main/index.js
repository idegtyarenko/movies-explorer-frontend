import Header from "components/Header";
import Promo from "components/Promo";
import AboutProject from "components/AboutProject";
import Techs from "components/Techs";
import AboutMe from "components/AboutMe";
import Portfolio from "components/Portfolio";
import Footer from "components/Footer";

import "./Main.css";

export default function Main() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
