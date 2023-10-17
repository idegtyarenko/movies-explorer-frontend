import HintLink from "components/HintLink";
import AuthForm from "components/AuthForm";
import { EMAIL_FIELD, PASSWORD_FIELD } from "utils/constants";

import useFormSubmit from "./hooks/useFormSubmit";

export default function LoginForm() {
  const fields = [EMAIL_FIELD, PASSWORD_FIELD];
  const { handleSubmit, error } = useFormSubmit();

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
      onSubmit={handleSubmit}
      error={error}
      displayValidationErrors={false}
    />
  );
}
