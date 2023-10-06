import HintLink from "components/HintLink";
import AuthForm from "components/AuthForm";
import { emailField, nameField, passwordField } from "utils/constants";

export default function RegisterForm() {
  const fields = [nameField, emailField, passwordField];

  const hint = (
    <HintLink text="Уже зарегистрированы?" buttonText="Войти" to="/signin" />
  );

  return (
    <AuthForm
      id="register"
      title="Добро пожаловать!"
      fields={fields}
      buttonName="Зарегистрироваться"
      belowButtonElement={hint}
    />
  );
}
