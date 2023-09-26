import React from "react";

import Logo from "ui/Logo";
import Link from "ui/Link";

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
        <Link className="auth-form__button" form={id} type="submit">
          {buttonName}
        </Link>
        {belowButtonElement}
      </div>
    </div>
  );
}
