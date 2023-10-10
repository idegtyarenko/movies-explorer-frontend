import { createContext, useContext, useReducer } from "react";

import { DISPLAY_DURATION } from "../utils/constants";

const NotificationsContext = createContext([]);
const NotificationsDispatchContext = createContext(null);

export function NotificationsProvider({ children }) {
  const [notifications, dispatch] = useReducer(notificationsReducer, []);

  return (
    <NotificationsContext.Provider value={notifications}>
      <NotificationsDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationsDispatchContext.Provider>
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationsContext);
}

export function useNotificationsDispatch() {
  return useContext(NotificationsDispatchContext);
}

function notificationsReducer(notifications = [], action) {
  switch (action.type) {
    case "add": {
      const id = window.crypto.randomUUID();
      const newNotification = { ...action.notification, id };
      const updatedNotifications = [...notifications, newNotification];
      setTimeout(() => {
        action.dispatch({ type: "remove", id });
      }, DISPLAY_DURATION);
      return updatedNotifications;
    }
    case "remove": {
      return notifications.filter(
        (notification) => notification.id !== action.id,
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
