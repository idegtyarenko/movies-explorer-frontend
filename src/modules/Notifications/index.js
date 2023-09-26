import Notification from "ui/Notification";

import "./Notifications.css";

export default function Notifications({ text }) {
  return (
    <div className="notifications">
      {text && <Notification type="error" title="Ошибка" text={text} />}
    </div>
  );
}
