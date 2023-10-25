import ContentWithNotifications from "modules/ContentWithNotifications";
import Main from "ui/Main";

export default function BasicLayout({ children }) {
  return (
    <ContentWithNotifications>
      <Main>
        <section>{children}</section>
      </Main>
    </ContentWithNotifications>
  );
}
