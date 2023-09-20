import "./Section.css";

export default function Section({
  tagName: TagName = "section",
  className,
  children,
}) {
  const classNames = className ? [className, "section"].join(" ") : "section";
  return <TagName className={classNames}>{children}</TagName>;
}
