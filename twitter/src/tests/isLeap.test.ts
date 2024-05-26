import { expect, test } from "vitest";
import { isLeapYear } from "components/DateSelect/helpers";

describe("isLeapYear function should work correct", () => {
  test("should return true", () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });
  test("should return false", () => {
    expect(isLeapYear(2001)).toBeFalsy();
  });
});
