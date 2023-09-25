import { joinClassNames } from "utils/utils";

export default function ButtonLink({ className, children }) {
  return (
    <button className={joinClassNames(["link_type_button", className])}>
      {children}
    </button>
  );
}
