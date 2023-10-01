import Section from "ui/Section";
import { FieldWithLabelAndError } from "ui/FormField";
import FormSubmitButton from "ui/FormSubmitButton";
import Link from "ui/Link";

import "./ProfileForm.css";

export default function ProfileForm({ isInEditMode }) {
  const formId = "profile";

  return (
    <Section className="profile-form" aria-label="Профиль пользователя">
      <h1 className="profile-form__title">Привет, Виталий!</h1>
      <form className="profile-form__form" id={formId}>
        <FieldWithLabelAndError
          id="user-name"
          className="profile-form__field"
          label="Имя"
          disabled={!isInEditMode}
          value="Виталий"
        />
        <FieldWithLabelAndError
          id="email"
          className="profile-form__field"
          label="Почта"
          disabled={!isInEditMode}
          value="pochta@yandex.ru"
        />
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
            <Link className="profile-form__link">Редактировать</Link>
            <Link className="profile-form__link link_color_warning">
              Выйти из аккаунта
            </Link>
          </>
        )}
      </div>
    </Section>
  );
}
