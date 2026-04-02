"use client";

import { useEffect } from "react";

export default function SnapScrollController() {
  useEffect(() => {
    document.documentElement.classList.add("snap-page");
    return () => {
      document.documentElement.classList.remove("snap-page");
    };
  }, []);

  return null;
}
