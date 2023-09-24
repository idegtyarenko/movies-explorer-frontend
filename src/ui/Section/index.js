import "./Section.css";

export default function Section({
  tagName: TagName = "section",
  className,
  children,
  ...props
}) {
  const classNames = className ? [className, "section"].join(" ") : "section";
  return (
    <TagName className={classNames} {...props}>
      {children}
    </TagName>
  );
}
