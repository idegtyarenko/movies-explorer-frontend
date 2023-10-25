import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer from "modules/MoviesExplorer";

export default function SavedMovies() {
  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesExplorer isSavedMovies={true} />
    </HeaderAndFooterLayout>
  );
}
