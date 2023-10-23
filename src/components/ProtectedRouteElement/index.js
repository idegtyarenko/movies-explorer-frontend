import { Navigate } from "react-router-dom";

import useCheckAuth from "hooks/useCheckAuth";
import Preloader from "ui/Preloader/Preloader";

export default function ProtectedRouteElement({
  element: Component,
  ...props
}) {
  const isAuthorized = useCheckAuth();

  return isAuthorized === undefined ? (
    <Preloader />
  ) : isAuthorized ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}
