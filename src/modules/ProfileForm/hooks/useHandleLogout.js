import { useNavigate } from "react-router-dom";

import { signOut } from "utils/mainApi";
import { useDisplayNotification } from "modules/ContentWithNotifications";
import { useCurrentUserDispatch } from "store/user";
import { CONNECTION_ERROR_MESSAGE } from "utils/strings";
import { saveSearchData } from "utils/utils";

export default function useHandleLogout() {
  const displayNotification = useDisplayNotification();
  const userDispatch = useCurrentUserDispatch();
  const navigate = useNavigate();

  return () => {
    signOut().catch(() => {
      displayNotification({
        type: "error",
        title: "Ошибка при выходе из аккаунта",
        text: CONNECTION_ERROR_MESSAGE,
      });
    });
    userDispatch({
      type: "set",
      user: {},
    });
    saveSearchData(null);
    navigate("/");
  };
}
