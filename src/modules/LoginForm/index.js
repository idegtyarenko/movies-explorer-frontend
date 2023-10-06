import HintLink from "components/HintLink";
import AuthForm from "components/AuthForm";
import { EMAIL_FIELD, PASSWORD_FIELD } from "utils/constants";

export default function LoginForm() {
  const fields = [EMAIL_FIELD, PASSWORD_FIELD];

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
