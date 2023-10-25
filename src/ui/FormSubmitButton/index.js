import { joinClassNames } from "utils/utils";

import "./FormSubmitButton.css";

export default function FormSubmitButton({
  formId,
  className,
  disabled,
  children,
}) {
  const defaultClass = "form-submit-button";

  return (
    <button
      className={joinClassNames([
        defaultClass,
        !disabled && "link-hover-behavior",
        disabled && "form-submit-button_state_disabled",
        className,
      ])}
      type="submit"
      form={formId}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
