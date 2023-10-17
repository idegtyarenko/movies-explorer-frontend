import { FieldWithLabelAndError } from "ui/FormField";

import "./Field.css";

export default function Field({ fieldDescription, ...props }) {
  return (
    <FieldWithLabelAndError
      id={fieldDescription.id}
      className="profile-form__field"
      label={fieldDescription.label}
      type={fieldDescription.type}
      {...fieldDescription.attributes}
      {...props}
    />
  );
}
