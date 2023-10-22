import Preloader from "ui/Preloader/Preloader";
import SearchForm from "components/SearchForm";
import PaginationControl from "components/PaginationControl";
import { useDisplayNotification } from "modules/ContentWithNotifications";

import useSearchFormState from "./hooks/useSearchFormState";
import { saveQuery, saveResult } from "./utils/localStorage";
import useMovies from "./hooks/useMovies";
import { filterMovies, getStatus, Status } from "./utils/utils";
import MovieCardsGrid from "./components/MovieCardsGrid";
import Error from "./components/Error";

export { MoviesDataProvider } from "./store";

export default function MoviesExplorer({ isSavedMovies = false }) {
  const { query, setQuery, submitCount, setSubmitCount } =
    useSearchFormState(isSavedMovies);

  const { moviesData, error, isLoading } = useMovies(
    submitCount,
    isSavedMovies,
  );
  const result = filterMovies(moviesData, query, isSavedMovies);
  if (!isSavedMovies) {
    saveQuery(query);
    saveResult(result);
  }

  const displayNotification = useDisplayNotification();
  const handleSubmit = (formValues) => {
    if (isSavedMovies || formValues["query-text"]) {
      setQuery(formValues);
      setSubmitCount((oldValue) => oldValue + 1);
    } else {
      displayNotification({
        type: "error",
        title: "Нужно ввести ключевое слово",
        text: "Чтобы что-то найти, надо что-то искать.",
      });
    }
  };

  const searchStatus = getStatus({
    isLoading,
    error,
    query,
    result,
    isSavedMovies,
  });

  return (
    <>
      <SearchForm onSubmit={handleSubmit} initialQuery={query} />
      {searchStatus === Status.LOADING && <Preloader />}
      {searchStatus === Status.FOUND && (
        <MovieCardsGrid movies={result} isSavedMovies={isSavedMovies} />
      )}
      {searchStatus === Status.ERROR && <Error error={error} />}
      <PaginationControl />
    </>
  );
}
