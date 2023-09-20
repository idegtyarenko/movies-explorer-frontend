export default function NavItem({ href, children }) {
  return (
    <li>
      <a className="footer__link" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  );
}
