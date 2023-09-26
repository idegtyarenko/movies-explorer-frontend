import { joinClassNames } from "utils/utils";

import "./FieldInput.css";

export default function FieldInput({ id, className, type, ...props }) {
  const defaultClassName = "field-input";

  return (
    <input
      className={joinClassNames([defaultClassName, className])}
      type={type || "text"}
      id={id}
      {...props}
    />
  );
}
