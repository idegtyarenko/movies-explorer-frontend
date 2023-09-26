import BasicLayout from "layouts/BasicLayout";
import Error404 from "components/Error404";

export default function PageNotFound() {
  return (
    <BasicLayout>
      <Error404 />
    </BasicLayout>
  );
}
