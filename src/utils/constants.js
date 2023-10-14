import { FieldDescription } from "ui/FormField";

export const MAIN_API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://api.smotrim.nomoreparties.co"
    : "http://localhost:3000";

export const NAME_FIELD = new FieldDescription("user-name", "Имя", "text", {
  required: true,
  minLength: 2,
  maxLength: 30,
  defaultValue: "Виталий",
  placeholder: "Например, Василиса",
});

export const EMAIL_FIELD = new FieldDescription("email", "E-mail", "email", {
  required: true,
  maxLength: 128,
  defaultValue: "pochta@yandex.ru",
  placeholder: "Например, vasilisa@yandex.ru",
});

export const PASSWORD_FIELD = new FieldDescription(
  "password",
  "Пароль",
  "password",
  {
    required: true,
    minLength: 6,
    maxLength: 30,
  },
);
