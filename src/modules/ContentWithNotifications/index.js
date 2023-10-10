import Notifications from "./components/Notifications";
import { NotificationsProvider } from "./store";

export default function ContentWithNotifications({ children }) {
  return (
    <NotificationsProvider>
      {children}
      <Notifications />
    </NotificationsProvider>
  );
}

export { default as useDisplayNotification } from "./hooks/useDisplayNotification";
