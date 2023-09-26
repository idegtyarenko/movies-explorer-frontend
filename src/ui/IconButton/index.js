import { joinClassNames } from "utils/utils";

import "./IconButton.css";

export default function IconButton({
  className,
  ariaLabel,
  type = "button",
  ...props
}) {
  const defaultClass = "button link-hover-animation";
  if (!ariaLabel) {
    console.error('"ariaLabel" is a required prop for IconButton component.');
    return;
  }
  return (
    <button
      className={joinClassNames([defaultClass, className])}
      type={type}
      aria-label={ariaLabel}
      {...props}
    />
  );
}
