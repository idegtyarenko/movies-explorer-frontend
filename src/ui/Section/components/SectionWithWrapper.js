import { joinClassNames } from "utils/utils";

import Section from "./Section";
import "./SectionWithWrapper.css";

export default function SectionWithWrapper({
  tagName: TagName = "section",
  wrapperClassName,
  className,
  backgroundColorName,
  children,
  ...props
}) {
  const defaultClass = "section-wrapper";
  const backgroundColorClass = backgroundColorName
    ? `section-wrapper_background_${backgroundColorName}`
    : undefined;
  return (
    <TagName
      className={joinClassNames([
        defaultClass,
        wrapperClassName,
        backgroundColorClass,
      ])}
      {...props}
    >
      <Section tagName="div" className={className}>
        {children}
      </Section>
    </TagName>
  );
}
