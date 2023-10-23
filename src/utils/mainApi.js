import { fetchResource } from "./utils";
import { MAIN_API_ROOT } from "./constants";

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

export function signUp({ email, password, name }) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signup",
    method: "POST",
    headers: DEFAULT_HEADERS,
    bodyObject: { email, password, name },
  });
}

export function signIn({ email, password }) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signin",
    method: "POST",
    headers: DEFAULT_HEADERS,
    bodyObject: { email, password },
  });
}

export function signOut() {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signout",
    method: "POST",
  });
}

export function fetchUser() {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/users/me",
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
  });
}

export function updateUser(user) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/users/me",
    method: "PATCH",
    headers: DEFAULT_HEADERS,
    bodyObject: user,
  });
}

export function getFavorites() {
  return fetchResource({ endpoint: MAIN_API_ROOT + "/movies" });
}

export function addFavorite(movieData) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/movies",
    method: "POST",
    headers: DEFAULT_HEADERS,
    bodyObject: movieData,
  });
}

export function removeFavorite(_id) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + `/movies/${_id}`,
    method: "DELETE",
  });
}
