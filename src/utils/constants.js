import { FieldDescription } from "ui/FormField";

export const MAIN_API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://api.smotrim.nomoreparties.co"
    : "http://localhost:3000";

export const NAME_FIELD = new FieldDescription("name", "Имя", "text", {
  required: true,
  minLength: 2,
  maxLength: 30,
  placeholder: "Например, Василиса",
});

export const EMAIL_FIELD = new FieldDescription("email", "E-mail", "email", {
  required: true,
  maxLength: 128,
  placeholder: "Например, vasilisa@yandex.ru",
  pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-z]{2,4}$",
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
