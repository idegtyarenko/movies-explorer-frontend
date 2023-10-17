import { React, useState } from "react";

import { NAME_FIELD, EMAIL_FIELD } from "utils/constants";
import { useCurrentUser, useCurrentUserDispatch } from "store/user";

import { updateUser } from "utils/mainApi";
import Section from "ui/Section";

import "./ProfileForm.css";
import useValidationAndCheckForChange from "./hooks/useValidationAndCheckForChange";
import useEditNotifications from "./hooks/useEditNotifications";
import { formId } from "./utils/constants";
import Field from "./components/Field";
import ProfileFormBottom from "./components/ProfileFormBottom";

export default function ProfileForm() {
  const fields = [NAME_FIELD, EMAIL_FIELD];

  const [isInEditMode, setIsInEditMode] = useState(false);
  const user = useCurrentUser();
  const { values, errors, handleChange, isValidAndChanged } =
    useValidationAndCheckForChange(user, fields);
  const dispatch = useCurrentUserDispatch();
  const [displaySuccessNotification, displayErrorNotification] =
    useEditNotifications();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsInEditMode(false);
      const updatedUser = await updateUser(values);
      dispatch({
        type: "set",
        user: updatedUser,
      });
      displaySuccessNotification(updatedUser.name);
    } catch (err) {
      setIsInEditMode(true);
      displayErrorNotification(err.message);
    }
  }

  return (
    <Section className="profile-form" aria-label="Профиль пользователя">
      <h1 className="profile-form__title">Привет, {user.name}!</h1>
      <form className="profile-form__form" id={formId} onSubmit={handleSubmit}>
        {fields.map((fieldDescription) => (
          <Field
            key={fieldDescription.id}
            value={values[fieldDescription.id]}
            fieldDescription={fieldDescription}
            onChange={handleChange}
            disabled={!isInEditMode}
          />
        ))}
      </form>
      <ProfileFormBottom
        isInEditMode={isInEditMode}
        toggleEditMode={() => {
          setIsInEditMode(!isInEditMode);
        }}
        fieldErrors={errors}
        isValid={isValidAndChanged}
      />
    </Section>
  );
}
