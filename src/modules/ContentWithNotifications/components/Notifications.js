import Notification from "ui/Notification";

import { useNotifications } from "../store";
import "./Notifications.css";

export default function Notifications() {
  const notifications = useNotifications();

  return (
    <div className="notifications">
      {notifications.map(({ id, type, title, text }) => (
        <Notification key={id} type={type} title={title} text={text} />
      ))}
    </div>
  );
}
