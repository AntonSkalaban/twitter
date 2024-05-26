import { expect, test } from "vitest";
import { getDaysInMonth } from "components/DateSelect/helpers";

describe("getDaysInMonth function should work correct", () => {
  test("January should have 31 days", () => {
    expect(getDaysInMonth(0, 1999)).toBe(31);
  });
  test("April should have 30 days", () => {
    expect(getDaysInMonth(3, 2000)).toBe(30);
  });
  test("February 2000 should have 29 days", () => {
    expect(getDaysInMonth(1, 2000)).toBe(29);
  });
  test("February 1999 should have 28 days", () => {
    expect(getDaysInMonth(1, 1999)).toBe(28);
  });
});
