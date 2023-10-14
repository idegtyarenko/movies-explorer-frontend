import { FieldWithLabelAndError } from "ui/FormField";

import "./Field.css";

export default function Field({ fieldDescription, value, error, onChange }) {
  const { id, label, type } = fieldDescription;
  return (
    <FieldWithLabelAndError
      id={id}
      className="auth-form__field"
      label={label}
      type={type}
      errorText={error}
      value={value}
      onChange={onChange}
      {...fieldDescription.attributes}
    />
  );
}
