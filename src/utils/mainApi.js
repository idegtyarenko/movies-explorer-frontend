import { fetchResource } from "./utils";
import { MAIN_API_ROOT } from "./constants";

export function signUp({ email, password, name }) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    bodyObject: { email, password, name },
  });
}

export function signIn({ email, password }) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    bodyObject: { email, password },
  });
}

export function signOut() {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/signout",
    method: "POST",
  });
}

export function getUser() {
  return fetchResource({ endpoint: MAIN_API_ROOT + "/users/me" });
}

export function getFavorites() {
  return fetchResource({ endpoint: MAIN_API_ROOT + "/movies" });
}

export function addFavorite(movieData) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + "/movies",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    bodyObject: movieData,
  });
}

export function removeFavorite(_id) {
  return fetchResource({
    endpoint: MAIN_API_ROOT + `/movies/${_id}`,
    method: "DELETE",
  });
}
