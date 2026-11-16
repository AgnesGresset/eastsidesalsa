import { expect, it } from "vitest";
import { robotsFromEnv } from "@/utils/robots";

const cases = [
  {
    name: "indexes when the value is index, follow",
    value: "index, follow",
    index: true,
    follow: true,
  },
  {
    name: "hides when the value is noindex, nofollow",
    value: "noindex, nofollow",
    index: false,
    follow: false,
  },
  {
    name: "indexes when the value is empty",
    value: "",
    index: true,
    follow: true,
  },
  {
    name: "indexes when only noindex is set",
    value: "noindex",
    index: true,
    follow: true,
  },
  {
    name: "indexes when the casing differs",
    value: "Noindex, Nofollow",
    index: true,
    follow: true,
  },
  {
    name: "indexes when the value has surrounding spaces",
    value: " noindex, nofollow ",
    index: true,
    follow: true,
  },
] as const;

it.each(cases)("$name", ({ value, index, follow }) => {
  expect(robotsFromEnv(value)).toEqual({ index, follow });
});
