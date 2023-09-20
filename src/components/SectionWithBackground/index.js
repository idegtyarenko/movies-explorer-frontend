import Section from "../Section";

import "./SectionWithBackground.css";

export default function SectionWithBackground({
  tagName: TagName = "section",
  classes = [],
  children,
}) {
  return (
    <TagName className="section-with-background">
      <Section tagName="div" classes={classes}>
        {children}
      </Section>
    </TagName>
  );
}
