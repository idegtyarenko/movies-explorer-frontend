import usePageTitle from "hooks/usePageTitle";
import BasicLayout from "layouts/BasicLayout";
import LoginForm from "modules/LoginForm";

export default function Login() {
  usePageTitle("Вход");

  return (
    <BasicLayout>
      <LoginForm />
    </BasicLayout>
  );
}
