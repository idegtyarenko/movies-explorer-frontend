import "./DesktopNav.css";

export default function DesktopNav({ children }) {
  return (
    <nav className="navigation navigation_platform_desktop">{children}</nav>
  );
}
