import { useNotificationsDispatch } from "../store";

export default function useDisplayNotification() {
  const notificationsDispatch = useNotificationsDispatch();

  return (notification) => {
    notificationsDispatch({
      type: "add",
      notification,
      dispatch: notificationsDispatch,
    });
  };
}
