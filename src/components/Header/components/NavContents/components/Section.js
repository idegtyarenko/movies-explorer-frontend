import { useLocation } from "react-router-dom";

import Link from "ui/Link";
import { joinClassNames } from "utils/utils";

export default function Section({ className, to, children }) {
  const path = useLocation().pathname;
  const isActive = to === path;

  return (
    <li className={className}>
      <Link
        className={joinClassNames([
          "navigation__link",
          isActive && "navigation__link_is-active",
        ])}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
