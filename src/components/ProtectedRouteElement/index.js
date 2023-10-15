import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import useCheckAuth from "hooks/useCheckAuth";
import Preloader from "ui/Preloader/Preloader";

export default function ProtectedRouteElement({
  element: Component,
  ...props
}) {
  const [isAuthorized, setIsAuthorized] = useState(undefined);
  const checkAuth = useCheckAuth();

  useEffect(() => {
    async function executeCheck() {
      try {
        await checkAuth();
        setIsAuthorized(true);
      } catch (err) {
        setIsAuthorized(false);
      }
    }

    executeCheck();
  }, [checkAuth]);

  return isAuthorized === undefined ? (
    <Preloader />
  ) : isAuthorized ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
}
