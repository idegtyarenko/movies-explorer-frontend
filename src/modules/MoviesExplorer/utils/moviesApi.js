import { MOVIES_API_ROOT } from "./constants";

const MOVIES_API_URL = MOVIES_API_ROOT + "beatfilm-movies";

export default async function fetchMovies() {
  const res = await fetch(MOVIES_API_URL);
  if (!res.ok) {
    return Promise.reject(res.status);
  }
  return await res.json();
}
