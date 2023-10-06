import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import Promo from "components/Promo";
import AboutProject from "components/AboutProject";
import Techs from "components/Techs";
import AboutMe from "components/AboutMe";
import Portfolio from "components/Portfolio";

export default function Main() {
  return (
    <HeaderAndFooterLayout isLoggedIn={false}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </HeaderAndFooterLayout>
  );
}
