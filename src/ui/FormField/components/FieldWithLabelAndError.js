import FieldInput from "./FieldInput";

export default function FormField({
  id,
  label,
  errorText,
  type,
  className,
  value,
  onChange,
  ...props
}) {
  if (label && !id) {
    console.error("To use label, you must add id");
    return;
  }

  const isErrorDisplayed = typeof errorText === "string";

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
        value={value}
        onChange={onChange}
        {...props}
      />
      {isErrorDisplayed && <p className={`${className}-error`}>{errorText}</p>}
    </div>
  );
}
