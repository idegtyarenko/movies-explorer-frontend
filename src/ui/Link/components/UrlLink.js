export default function UrlLink({ className, to, children }) {
  return (
    <a className={className} href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
