import { signOut } from "utils/mainApi";
import { useDisplayNotification } from "modules/ContentWithNotifications";
import { useCurrentUserDispatch } from "store/user";
import { CONNECTION_ERROR_MESSAGE } from "utils/strings";

export default function useHandleLogout() {
  const displayNotification = useDisplayNotification();
  const userDispatch = useCurrentUserDispatch();

  function clearUserData() {
    userDispatch({
      type: "set",
      user: {},
    });
    localStorage.clear();
  }

  return () => {
    signOut()
      .then(clearUserData())
      .catch(() => {
        displayNotification({
          type: "error",
          title: "Ошибка при выходе из аккаунта",
          text: CONNECTION_ERROR_MESSAGE,
        });
      });
  };
}
