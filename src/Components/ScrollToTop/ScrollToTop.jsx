import { useCursorStore } from "@/StateManagment/zustandLib";
import React from "react";

export default function ScrollToTop() {
  const { setIsEmoji } = useCursorStore();
  React.useEffect(() => {
    setIsEmoji({ shape: 1, hovering: false });
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.scrollTo(0, 0);
    }
  }, [setIsEmoji]);
  return null;
}
