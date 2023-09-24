import Section from "ui/Section";

import "./SectionWithBackground.css";

export default function SectionWithBackground({
  tagName: TagName = "section",
  className,
  backgroundColor,
  children,
  ...props
}) {
  return (
    <TagName
      className="section-with-background"
      style={{ backgroundColor }}
      {...props}
    >
      <Section tagName="div" className={className}>
        {children}
      </Section>
    </TagName>
  );
}
