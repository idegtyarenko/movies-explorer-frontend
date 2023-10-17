import React from "react";

import useValidation from "hooks/useValidation";
import Logo from "ui/Logo";
import FormSubmitButton from "ui/FormSubmitButton";

import Field from "./components/Field";
import "./AuthForm.css";

export default function AuthForm({
  id,
  title,
  fields,
  buttonName,
  belowButtonElement,
  onSubmit,
  error,
  displayValidationErrors = true,
}) {
  const { values, errors, isValid, handleChange } = useValidation({});
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <div className="auth-form">
      <div className="auth-form__top">
        <Logo />
        <h1 className="auth-form__title">{title}</h1>
      </div>
      <form
        className="auth-form__form"
        id={id}
        noValidate
        onSubmit={handleSubmit}
      >
        {fields.map((fieldDescription) => (
          <Field
            key={fieldDescription.id}
            fieldDescription={fieldDescription}
            value={values[fieldDescription.id] || ""}
            error={
              displayValidationErrors ? errors[fieldDescription.id] || "" : ""
            }
            onChange={handleChange}
          />
        ))}
      </form>
      <div className="auth-form__bottom">
        <p className="auth-form__error">{error}</p>
        <FormSubmitButton formId={id} disabled={!isValid}>
          {buttonName}
        </FormSubmitButton>
        {belowButtonElement}
      </div>
    </div>
  );
}
