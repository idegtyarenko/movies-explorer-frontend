import { useNavigate } from "react-router-dom";

import { fetchUser, signOut } from "utils/mainApi";
import { useDisplayNotification } from "modules/ContentWithNotifications";
import { useCurrentUserDispatch } from "store/user";
import { CONNECTION_ERROR_MESSAGE } from "utils/strings";

export default function useHandleLogout() {
  const displayNotification = useDisplayNotification();
  const userDispatch = useCurrentUserDispatch();
  const navigate = useNavigate();

  async function clearUserData() {
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    if (isFirefox) {
      await fetchUser(); // A quick fix for logout issues in Firefox
    }
    userDispatch({
      type: "set",
      user: {},
    });
    localStorage.clear();
    navigate("/");
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
