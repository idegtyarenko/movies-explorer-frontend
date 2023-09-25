import Header from "components/Header";
import Main from "ui/Main";
import Footer from "components/Footer";

export default function HeaderAndFooterLayout({ isLoggedIn, children }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
