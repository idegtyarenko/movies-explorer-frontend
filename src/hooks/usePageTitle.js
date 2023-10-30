import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    const GENERAL_TITLE = "Смотрим";
    document.title = [title, GENERAL_TITLE].join(" — ");
    return () => {
      document.title = GENERAL_TITLE;
    };
  }, [title]);
}
