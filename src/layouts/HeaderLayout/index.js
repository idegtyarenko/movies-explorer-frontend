import Header from "components/Header";
import Main from "ui/Main";
import Notifications from "modules/Notifications";

export default function HeaderLayout({ isLoggedIn, children }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main>{children}</Main>
      <Notifications />
    </>
  );
}
