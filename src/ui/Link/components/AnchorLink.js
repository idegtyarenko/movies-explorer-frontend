export default function AnchorLink({ className, to, children }) {
  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
}
