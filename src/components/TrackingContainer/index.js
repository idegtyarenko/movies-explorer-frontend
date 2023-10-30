import useMatomo from "./hooks/useMatomo";

export default function TrackingContainer({ children }) {
  useMatomo();

  return <>{children}</>;
}
