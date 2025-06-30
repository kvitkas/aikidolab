import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conditional classes with objects", () => {
    expect(cn("base", { active: true, inactive: false })).toBe("base active");
  });

  it("should resolve tailwind class conflicts", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("should handle undefined and null values", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
  });

  it("should handle arrays", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz");
  });

  it("should handle complex mixed inputs", () => {
    expect(
      cn("base", { active: true }, ["foo", "bar"], undefined, "final"),
    ).toBe("base active foo bar final");
  });
});
