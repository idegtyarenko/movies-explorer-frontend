import usePageTitle from "hooks/usePageTitle";
import BasicLayout from "layouts/BasicLayout";
import RegisterForm from "modules/RegisterForm";

export default function Register() {
  usePageTitle("Регистрация");

  return (
    <BasicLayout>
      <RegisterForm />
    </BasicLayout>
  );
}
