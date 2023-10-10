import { useState } from "react";

export default function useValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const { name, value, type, checked, validationMessage } = input;

    const typeDependentValue = type === "checkbox" ? checked : value;

    setValues({ ...values, [name]: typeDependentValue });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(input.closest("form").checkValidity());
  }

  return { values, errors, isValid, handleChange };
}
