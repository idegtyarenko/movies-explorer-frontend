import Section from "../Section";

import "./SectionWithBackground.css";

export default function SectionWithBackground({
  tagName: TagName = "section",
  className,
  children,
  ...props
}) {
  return (
    <TagName className="section-with-background" {...props}>
      <Section tagName="div" className={className}>
        {children}
      </Section>
    </TagName>
  );
}
