import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { EMAIL_FIELD, NAME_FIELD, PASSWORD_FIELD } from "utils/constants";
import useCheckAuth from "hooks/useCheckAuth";
import HintLink from "components/HintLink";
import { signUp } from "utils/mainApi";
import AuthForm from "components/AuthForm";

export default function RegisterForm() {
  const fields = [NAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD];
  const [error, setError] = useState("");
  const checkAuth = useCheckAuth();
  const navigate = useNavigate();

  const hint = (
    <HintLink text="Уже зарегистрированы?" buttonText="Войти" to="/signin" />
  );

  async function handleSubmit(values) {
    try {
      await signUp({
        email: values.email,
        password: values.password,
        name: values["user-name"],
      });
      try {
        await checkAuth();
        navigate("/movies");
      } catch (err) {
        navigate("/signin");
      }
    } catch (err) {
      setError(err.message);
    }
  }

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
