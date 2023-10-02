import { joinClassNames } from "utils/utils";

import "./FormSubmitButton.css";

export default function FormSubmitButton({
  formId,
  className,
  disabled,
  children,
}) {
  const defaultClass = "form-submit-button link-hover-behavior";

  return (
    <button
      className={joinClassNames([
        defaultClass,
        disabled && "form-submit-button_state_disabled",
        className,
      ])}
      type="submit"
      form={formId}
    >
      {children}
    </button>
  );
}
