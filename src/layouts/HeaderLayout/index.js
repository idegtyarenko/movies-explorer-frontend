import ContentWithNotifications from "modules/ContentWithNotifications";
import Header from "components/Header";
import Main from "ui/Main";

export default function HeaderLayout({ isLoggedIn, children }) {
  return (
    <ContentWithNotifications>
      <Header />
      <Main>{children}</Main>
    </ContentWithNotifications>
  );
}
