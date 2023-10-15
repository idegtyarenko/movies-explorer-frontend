import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer, { MoviesProvider } from "modules/MoviesExplorer";

export default function Movies() {
  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesProvider>
        <MoviesExplorer />
      </MoviesProvider>
    </HeaderAndFooterLayout>
  );
}
