import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer, { MoviesProvider } from "modules/MoviesExplorer";

export default function SavedMovies() {
  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesProvider>
        <MoviesExplorer isSavedMovies={true} />
      </MoviesProvider>
    </HeaderAndFooterLayout>
  );
}
