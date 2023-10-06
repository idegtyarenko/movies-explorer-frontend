import "./Notification.css";

export default function Notification({ type, title, text }) {
  const availableTypes = ["info", "error"];
  const notificationType = availableTypes.includes(type) ? type : "info";
  return (
    <div className={`notification notification_type_${notificationType}`}>
      <p
        className={`notification__title notification__title_type_${notificationType}`}
      >
        {title}
      </p>
      <p className="notification__text">{text}</p>
    </div>
  );
}
