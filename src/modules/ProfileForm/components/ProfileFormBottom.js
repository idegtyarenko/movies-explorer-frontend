import FormSubmitButton from "ui/FormSubmitButton";
import Link from "ui/Link";

import "./ProfileFormBottom.css";
import useHandleLogout from "../hooks/useHandleLogout";
import { formId } from "../utils/constants";

export default function ProfileFormBottom({
  isInEditMode,
  toggleEditMode,
  fieldErrors,
  isValid,
}) {
  const onSignOut = useHandleLogout();

  const errorText = Object.values(fieldErrors)
    .filter((value) => !!value)
    .join("  |  ");

  return (
    <div className="profile-form__bottom">
      {isInEditMode ? (
        <>
          <p className="profile-form__error">{errorText}</p>
          <FormSubmitButton formId={formId} disabled={!isValid}>
            Сохранить
          </FormSubmitButton>
        </>
      ) : (
        <>
          <Link className="profile-form__link" onClick={toggleEditMode}>
            Редактировать
          </Link>
          <Link
            className="profile-form__link profile-form__link_type_logout link_color_warning"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </Link>
        </>
      )}
    </div>
  );
}
