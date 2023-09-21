import "./NavItem.css";

export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        className="footer__nav-item"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
