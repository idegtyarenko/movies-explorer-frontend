import { joinClassNames } from "utils/utils";

import "./Section.css";

export default function Section({
  tagName: TagName = "section",
  className,
  children,
  ...props
}) {
  const defaultClass = "section";
  return (
    <TagName className={joinClassNames([defaultClass, className])} {...props}>
      {children}
    </TagName>
  );
}
