import { joinClassNames } from "utils/utils";

import UrlLink from "./components/UrlLink";
import RouterLink from "./components/RouterLink";
import AnchorLink from "./components/AnchorLink";
import "./Link.css";

export default function Link({ className, to, children }) {
  const defaultClass = "link link-hover-animation";
  const Component = chooseLinkComponent(to);
  return (
    <Component className={joinClassNames([defaultClass, className])} to={to}>
      {children}
    </Component>
  );
}

function chooseLinkComponent(link) {
  const anchorLinkPattern = /^#[a-zA-Z_][\w-]*$/;

  if (link.includes("://")) {
    return UrlLink;
  } else if (anchorLinkPattern.test(link)) {
    return AnchorLink;
  } else {
    return RouterLink;
  }
}
