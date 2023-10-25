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

    async function executeCheck() {
      try {
        await getUser();
        setIsAuthorized(true);
      } catch (err) {
        setIsAuthorized(false);
      }
    }

    executeCheck();
  }, [currentUser, dispatch]);

  return isAuthorized;
}
