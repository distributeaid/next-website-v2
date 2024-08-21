import { describe, it, expect } from "vitest";

describe("Testing for the string hello world", () => {
  it("returns hello world", () => {
    expect("Hello World").toEqual("Hello World");
  });
});
