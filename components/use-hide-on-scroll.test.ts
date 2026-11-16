import { act, renderHook } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import {
  scrollThreshold,
  useHideOnScroll,
} from "@/components/use-hide-on-scroll";

const cases = [
  {
    name: "stays visible at the top",
    positions: [0],
    hidden: false,
  },
  {
    name: "ignores a downward move under the threshold",
    positions: [0, scrollThreshold - 1],
    hidden: false,
  },
  {
    name: "stays visible when the downward move equals the threshold",
    positions: [0, scrollThreshold],
    hidden: false,
  },
  {
    name: "hides when scrolling down past the threshold",
    positions: [0, scrollThreshold + 1],
    hidden: true,
  },
  {
    name: "stays hidden when the upward move equals the threshold",
    positions: [0, 40, 40 - scrollThreshold],
    hidden: true,
  },
  {
    name: "shows when scrolling up past the threshold",
    positions: [0, 40, 40 - scrollThreshold - 1],
    hidden: false,
  },
  {
    name: "shows when returning to the top",
    positions: [0, 40, 0],
    hidden: false,
  },
  {
    name: "ignores a further downward move under the threshold",
    positions: [0, 40, 40 + scrollThreshold - 1],
    hidden: true,
  },
] as const;

function setScrollY(y: number) {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: y,
  });
  window.dispatchEvent(new Event("scroll"));
}

beforeEach(() => {
  setScrollY(0);
});

it.each(cases)("$name", ({ positions, hidden }) => {
  const { result } = renderHook(() => useHideOnScroll());

  act(() => {
    for (const position of positions) {
      setScrollY(position);
    }
  });

  expect(result.current).toBe(hidden);
});
