import { joinClassNames } from "utils/utils";

export default function ButtonLink({ className, onClick, children }) {
  return (
    <button
      className={joinClassNames(["link_type_button", className])}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
