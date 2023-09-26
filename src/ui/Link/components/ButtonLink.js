import { joinClassNames } from "utils/utils";

export default function ButtonLink({ className, type, form, children }) {
  return (
    <button
      className={joinClassNames(["link_type_button", className])}
      type={type || "button"}
      form={form}
    >
      {children}
    </button>
  );
}
