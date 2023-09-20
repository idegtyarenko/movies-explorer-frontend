import Section from "../Section";

import "./SectionWithBackground.css";

export default function SectionWithBackground({
  tagName: TagName = "section",
  className,
  children,
}) {
  return (
    <TagName className="section-with-background">
      <Section tagName="div" className={className}>
        {children}
      </Section>
    </TagName>
  );
}
