import { FieldWithLabelAndError } from "ui/FormField";

import "./Field.css";

export default function Field(fieldDescription) {
  return (
    <FieldWithLabelAndError
      key={fieldDescription.id}
      id={fieldDescription.id}
      className="auth-form__field"
      label={fieldDescription.label}
      type={fieldDescription.type}
      {...fieldDescription.attributes}
    />
  );
}
