import { React, useState } from "react";

import { NAME_FIELD, EMAIL_FIELD } from "utils/constants";
import Section from "ui/Section";
import FormSubmitButton from "ui/FormSubmitButton";
import Link from "ui/Link";

import "./ProfileForm.css";
import Field from "./components/Field";

export default function ProfileForm() {
  const formId = "profile";
  const fields = [NAME_FIELD, EMAIL_FIELD];
  const [isInEditMode, setIsInEditMode] = useState(false);
  const toggleEditMode = (e) => {
    setIsInEditMode(!isInEditMode);
  };

  return (
    <Section className="profile-form" aria-label="Профиль пользователя">
      <h1 className="profile-form__title">Привет, Виталий!</h1>
      <form className="profile-form__form" id={formId}>
        {fields.map((fieldDescription) => (
          <Field
            key={fieldDescription.id}
            fieldDescription={fieldDescription}
            disabled={!isInEditMode}
          />
        ))}
      </form>
      <div className="profile-form__bottom">
        {isInEditMode ? (
          <>
            <p className="profile-form__error">
              При обновлении профиля произошла ошибка.
            </p>
            <FormSubmitButton formId={formId}>Сохранить</FormSubmitButton>
          </>
        ) : (
          <>
            <Link className="profile-form__link" onClick={toggleEditMode}>
              Редактировать
            </Link>
            <Link
              className="profile-form__link profile-form__link_type_logout link_color_warning"
              to="/"
            >
              Выйти из аккаунта
            </Link>
          </>
        )}
      </div>
    </Section>
  );
}
