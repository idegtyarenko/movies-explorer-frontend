import Header from "components/Header";
import Main from "ui/Main";

export default function HeaderLayout({ isLoggedIn, children }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main>{children}</Main>
    </>
  );
}
