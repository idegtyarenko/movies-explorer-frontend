import { joinClassNames } from "utils/utils";

import "./Switch.css";

export default function Switch({ label, className }) {
  const defaultClass = "switch";

  return (
    <label className={joinClassNames([defaultClass, className])}>
      <input type="checkbox" className="switch__input"></input>
      {label}
    </label>
  );
}
