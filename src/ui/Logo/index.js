import { joinClassNames } from "utils/utils";
import Link from "ui/Link";

import logo from "images/logo.svg";

import "./Logo.css";

export default function Logo({ className }) {
  const defaultClass = "logo";
  return (
    <Link className={joinClassNames([defaultClass, className])} to="/">
      <img src={logo} alt="Логотип «Смотрим»"></img>
    </Link>
  );
}
