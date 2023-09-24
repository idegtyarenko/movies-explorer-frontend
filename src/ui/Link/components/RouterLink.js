import { Link } from "react-router-dom";

export default function RouterLink({ className, to, children }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
