import IconButton from "ui/IconButton";

import "./Burger.css";

export default function Menu({ handleClick }) {
  return (
    <IconButton
      className="burger except-desktop"
      type="button"
      ariaLabel="Открыть меню"
      onClick={handleClick}
    />
  );
}
