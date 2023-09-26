import Header from "components/Header";
import Main from "ui/Main";
import Footer from "components/Footer";
import Notifications from "modules/Notifications";

export default function HeaderAndFooterLayout({ isLoggedIn, children }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main>{children}</Main>
      <Footer />
      <Notifications />
    </>
  );
}
