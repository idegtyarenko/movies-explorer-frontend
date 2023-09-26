import { FieldDescription } from "ui/FormField";

export const nameField = new FieldDescription("user-name", "Имя", "text", {
  required: true,
  minLength: 2,
  maxLength: 30,
});

export const emailField = new FieldDescription("email", "E-mail", "email", {
  required: true,
  maxLength: 128,
});

export const passwordField = new FieldDescription(
  "password",
  "Пароль",
  "password",
  {
    required: true,
    minLength: 6,
    maxLength: 30,
  },
);
