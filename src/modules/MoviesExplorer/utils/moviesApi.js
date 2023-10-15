import { fetchResource } from "utils/utils";
import { MOVIES_API_ROOT } from "./constants";

export default async function fetchMovies() {
  return fetchResource({
    endpoint: MOVIES_API_ROOT + "beatfilm-movies",
    credentials: false,
  });
}
