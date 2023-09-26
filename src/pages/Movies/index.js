import HeaderAndFooterLayout from "layouts/HeaderAndFooterLayout";
import MoviesExplorer from "modules/MoviesExplorer";

export default function Movies() {
  return (
    <HeaderAndFooterLayout isLoggedIn={true}>
      <MoviesExplorer />
    </HeaderAndFooterLayout>
  );
}
