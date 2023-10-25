import { useCallback } from "react";

import { useNotificationsDispatch } from "../store";

export default function useDisplayNotification() {
  const notificationsDispatch = useNotificationsDispatch();
  const displayNotificationCallback = useCallback(
    (notification) => {
      notificationsDispatch({
        type: "add",
        notification,
        dispatch: notificationsDispatch,
      });
    },
    [notificationsDispatch],
  );
  return displayNotificationCallback;
}
