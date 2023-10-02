import { useLocation } from "react-router-dom";

import Link from "ui/Link";
import { joinClassNames } from "utils/utils";

export default function Profile() {
  const to = "/profile";
  const path = useLocation().pathname;
  const isActive = to === path;

  return (
    <Link
      className={joinClassNames([
        "navigation__profile",
        isActive && "navigation__profile_is-active",
      ])}
      to={to}
    >
      Аккаунт
    </Link>
  );
}
