import { useEffect } from "react";

export default function useMatomo() {
  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    (function () {
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src =
        "https://cdn.matomo.cloud/iadegtyarenko0.matomo.cloud/container_AJMIzYEL.js";
      s.parentNode.insertBefore(g, s);
    })();
  }, []);
}
