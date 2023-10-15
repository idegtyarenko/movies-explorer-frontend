import { useCallback, useState, useEffect } from "react";

export default function useIsDesktop() {
  const checkIfDesktop = useCallback(() => window.innerWidth > 768, []);
  const [isDesktop, setIsDesktop] = useState(checkIfDesktop());

  useEffect(() => {
    const handleResize = () => setIsDesktop(checkIfDesktop());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIfDesktop]);

  return isDesktop;
}
