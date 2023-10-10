import { joinClassNames } from "utils/utils";

import "./Switch.css";

export default function Switch({ label, className, onChange, checked, name }) {
  const defaultClass = "switch";

  return (
    <label className={joinClassNames([defaultClass, className])}>
      <input
        type="checkbox"
        className="switch__input"
        name={name}
        onChange={onChange}
        checked={checked}
      ></input>
      {label}
    </label>
  );
}
