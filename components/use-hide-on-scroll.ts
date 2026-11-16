"use client";

import { useEffect, useState } from "react";

export const scrollThreshold = 8;

export function useHideOnScroll(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      const nextY = window.scrollY;
      const delta = nextY - previousY;

      if (nextY <= 0) {
        setHidden(false);
      } else if (delta > scrollThreshold) {
        setHidden(true);
      } else if (delta < -scrollThreshold) {
        setHidden(false);
      }

      previousY = nextY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return hidden;
}
