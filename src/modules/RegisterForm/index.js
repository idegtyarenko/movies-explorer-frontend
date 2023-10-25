import { EMAIL_FIELD, NAME_FIELD, PASSWORD_FIELD } from "utils/constants";
import HintLink from "components/HintLink";
import AuthForm from "components/AuthForm";

import useFormSubmit from "./hooks/useFormSubmit";

export default function RegisterForm() {
  const fields = [NAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD];
  const { handleSubmit, error } = useFormSubmit();

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
      onSubmit={handleSubmit}
      error={error}
    />
  );
}
