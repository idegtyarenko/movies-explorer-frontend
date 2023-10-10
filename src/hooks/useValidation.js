import { useState } from "react";

export default function useValidation(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    const typeDependentValue = type === "checkbox" ? checked : value;

    setValues({ ...values, [name]: typeDependentValue });
  }

  return { values, handleChange };
}
