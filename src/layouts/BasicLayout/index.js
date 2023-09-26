import Notifications from "modules/Notifications";

export default function BasicLayout({ children }) {
  return (
    <>
      {children}
      <Notifications text="" />
    </>
  );
}
