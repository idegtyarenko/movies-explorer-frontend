import HintLink from "components/HintLink";
import AuthForm from "components/AuthForm";
import { emailField, passwordField } from "components/AuthForm/utils/constants";

export default function LoginForm() {
  const fields = [emailField, passwordField];

  const hint = (
    <HintLink
      text="Ещё не зарегистрированы?"
      buttonText="Регистрация"
      to="/signup"
    />
  );

  return (
    <AuthForm
      id="login"
      title="Рады видеть!"
      fields={fields}
      buttonName="Войти"
      belowButtonElement={hint}
    />
  );
}
