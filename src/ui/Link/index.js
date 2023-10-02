import { joinClassNames } from "utils/utils";

import UrlLink from "./components/UrlLink";
import RouterLink from "./components/RouterLink";
import AnchorLink from "./components/AnchorLink";
import ButtonLink from "./components/ButtonLink";
import "./Link.css";

export default function Link({ className, to, type, form, children }) {
  const defaultClass = "link link-hover-behavior";
  const Component = chooseLinkComponent(to);

  function chooseLinkComponent(link) {
    const anchorLinkPattern = /^#[a-zA-Z_][\w-]*$/;

    if (!link) {
      return ButtonLink;
    } else if (link.includes(":")) {
      return UrlLink;
    } else if (anchorLinkPattern.test(link)) {
      return AnchorLink;
    } else {
      return RouterLink;
    }
  }

  return (
    <Component
      className={joinClassNames([defaultClass, className])}
      to={to}
      type={type}
      form={form}
    >
      {children}
    </Component>
  );
}
