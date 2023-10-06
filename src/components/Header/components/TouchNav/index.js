import IconButton from "ui/IconButton";
import { joinClassNames } from "utils/utils";

import "./TouchNav.css";

export default function TouchNav({ isMenuOpen, handleClose, children }) {
  return (
    <nav
      className={joinClassNames([
        "navigation navigation_platform_touch",
        isMenuOpen && "navigation_is-menu-open",
      ])}
    >
      <div
        className={joinClassNames([
          "navigation__content",
          isMenuOpen && "navigation__content_is-menu-open",
        ])}
      >
        <IconButton
          className="navigation__close-menu except-desktop"
          ariaLabel="Закрыть меню"
          onClick={handleClose}
        />
        {children}
      </div>
    </nav>
  );
}
