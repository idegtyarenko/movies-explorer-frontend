import usePageTitle from "hooks/usePageTitle";
import BasicLayout from "layouts/BasicLayout";
import Error404 from "components/Error404";

export default function PageNotFound() {
  usePageTitle("404");

  return (
    <BasicLayout>
      <Error404 />
    </BasicLayout>
  );
}
