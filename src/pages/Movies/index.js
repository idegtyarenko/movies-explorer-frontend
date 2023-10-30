import usePageTitle from "hooks/usePageTitle";
import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer from "modules/MoviesExplorer";

export default function Movies() {
  usePageTitle("Фильмы");

  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesExplorer />
    </HeaderAndFooterLayout>
  );
}
