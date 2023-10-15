import { useCurrentUser, useCurrentUserDispatch } from "store/user";
import { getUser } from "utils/mainApi";

export default function useCheckAuth() {
  const currentUser = useCurrentUser();
  const dispatch = useCurrentUserDispatch();

  async function checkAuth() {
    if ("_id" in currentUser) {
      return currentUser;
    }
    try {
      const response = await getUser();
      const user = response.body;
      dispatch({ type: "set", user });
      return user;
    } catch (err) {
      return Promise.reject(err.message);
    }
  }

  return checkAuth;
}
