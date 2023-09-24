import Header from "components/Header";
import Promo from "../Promo";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
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
