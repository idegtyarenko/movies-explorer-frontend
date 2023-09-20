import "./Section.css";

export default function Section({
  tagName: TagName = "section",
  classes = [],
  children,
}) {
  const classNames = [...classes, "section"].join(" ");
  return <TagName className={classNames}>{children}</TagName>;
}
