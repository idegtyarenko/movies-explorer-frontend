import usePageTitle from "hooks/usePageTitle";
import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer from "modules/MoviesExplorer";

export default function SavedMovies() {
  usePageTitle("Сохранённые фильмы");

  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesExplorer isSavedMovies={true} />
    </HeaderAndFooterLayout>
  );
}
