import FieldInput from "./FieldInput";

export default function FormField({
  id,
  label,
  errorText,
  type,
  className,
  ...props
}) {
  if (label && !id) {
    console.error("To use label, you must add id");
    return;
  }

  return (
    <div className={className}>
      {label && (
        <label className={`${className}-label`} htmlFor={id}>
          {label}
        </label>
      )}
      <FieldInput
        className={`${className}-input`}
        type={type || "text"}
        id={id}
        {...props}
      />
      <p className={`${className}-error`}>{errorText}</p>
    </div>
  );
}
