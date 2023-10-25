import { useState } from "react";

export default function useValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const makeErrorMessage = (name) => {
    switch (name) {
      case "name": {
        return "Введите имя от 3 символов длиной";
      }
      case "email": {
        return "Введите корректный адрес email";
      }
      case "password": {
        return "Пароль должен быть не короче 6 символов длиной";
      }
      default: {
        return "Убедитесь, что все поля заполнены корректно";
      }
    }
  };

  function handleChange(e) {
    const input = e.target;
    const { name, value, type, checked } = input;

    const typeDependentValue = type === "checkbox" ? checked : value;

    setValues({ ...values, [name]: typeDependentValue });

    const isValidInput = input.checkValidity();
    setErrors({
      ...errors,
      [name]: isValidInput ? "" : makeErrorMessage(name),
    });
    setIsValid(input.closest("form").checkValidity());
  }

  return { values, errors, isValid, handleChange };
}
