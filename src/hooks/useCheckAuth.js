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
      const user = await getUser();
      dispatch({ type: "set", user });
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return checkAuth;
}
