"use client";

import { useEffect } from "react";
import active from "@/app/favicon.ico";
import inactive from "@/app/favicon2.ico";

export default function FaviconChanger() {
  useEffect(() => {
    const originalFavicon = active.src;
    const hiddenFavicon = inactive.src;

    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = document.hidden ? hiddenFavicon : originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
