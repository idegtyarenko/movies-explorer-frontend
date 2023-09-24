import { Link } from "react-router-dom";

import logo from "images/logo.svg";

import "./Logo.css";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img
        src={logo}
        alt="Логотип «Смотрим»"
        className="opacity-on-hover"
      ></img>
    </Link>
  );
}
