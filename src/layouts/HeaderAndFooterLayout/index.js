import ContentWithNotifications from "modules/ContentWithNotifications";
import Header from "components/Header";
import Main from "ui/Main";
import Footer from "components/Footer";

export default function HeaderAndFooterLayout({ isLoggedIn, children }) {
  return (
    <ContentWithNotifications>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContentWithNotifications>
  );
}
