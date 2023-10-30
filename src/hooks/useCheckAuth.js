import { useEffect, useState } from "react";

import { useCurrentUser, useCurrentUserDispatch } from "store/user";
import { fetchUser } from "utils/mainApi";

export default function useCheckAuth() {
  const currentUser = useCurrentUser();
  const dispatch = useCurrentUserDispatch();
  const [isAuthorized, setIsAuthorized] = useState(undefined);

  useEffect(() => {
    async function getUser() {
      if ("_id" in currentUser) {
        return currentUser;
      }
      try {
        const user = await fetchUser();
        dispatch({ type: "set", user });
        return user;
      } catch (err) {
        throw new Error(err.message);
      }
    }

    function pushUserIdToMatomoDataLayer(id) {
      window._mtm = window._mtm || [];
      window._mtm.push({ userId: id });
    }

    async function executeCheck() {
      try {
        const user = await getUser();
        pushUserIdToMatomoDataLayer(user._id);
        setIsAuthorized(true);
      } catch (err) {
        setIsAuthorized(false);
      }
    }

    executeCheck();
  }, [currentUser, dispatch]);

  return isAuthorized;
}
