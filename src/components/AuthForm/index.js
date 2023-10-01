import React from "react";

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
}) {
  return (
    <div className="auth-form">
      <div className="auth-form__top">
        <Logo />
        <h1 className="auth-form__title">{title}</h1>
      </div>
      <form className="auth-form__form" id={id} noValidate>
        {fields.map(Field)}
      </form>
      <div className="auth-form__bottom">
        <FormSubmitButton formId={id}>{buttonName}</FormSubmitButton>
        {belowButtonElement}
      </div>
    </div>
  );
}
