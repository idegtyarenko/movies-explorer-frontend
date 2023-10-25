import { useState } from "react";

import { loadPreviousQuery } from "../utils/localStorage";

export default function useSearchFormState(isSavedMovies) {
  const emptyQuery = { "query-text": "", "short-filter": false };
  const initialQuery = !isSavedMovies
    ? loadPreviousQuery() ?? emptyQuery
    : emptyQuery;
  const [query, setQuery] = useState(initialQuery);
  const [submitCount, setSubmitCount] = useState(0);

  return { query, setQuery, submitCount, setSubmitCount };
}
