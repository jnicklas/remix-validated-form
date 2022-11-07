import { describe, test, expect } from "vitest";
import { getPath } from "./getPath";

interface SampleType {
  a: {
    b: {
      c: number;
      d?: number;
    };
    e: Array<{ f: { g: number } }>;
    z?: number | undefined;
  };
  x?: number;
  y?: number;
}

const obj: SampleType = {
  a: {
    b: {
      c: 1,
    },
    e: [{ f: { g: 1 } }, { f: { g: 1 } }],
  },
  y: 10,
};

describe("getPath", () => {
  test("should get value at path", () => {
    expect(getPath(obj, "a.b.c")).toBe(1);
    expect(getPath(obj, "a.e[0].f")).toEqual({ g: 1 });
  });
});
