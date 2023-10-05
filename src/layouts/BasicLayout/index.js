import Main from "ui/Main";
import Notifications from "modules/Notifications";

export default function BasicLayout({ children }) {
  return (
    <>
      <Main>
        <section>{children}</section>
      </Main>
      <Notifications text="" />
    </>
  );
}
