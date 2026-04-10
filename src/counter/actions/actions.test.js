import { describe, it, expect } from "vitest";
import { INCREMENT } from "../constants";
import { increment } from "./counterActions";

describe("counter actions", () => {
  it("increment action returns INCREMENT type", () => {
    const action = increment();
    expect(action.type).toBe(INCREMENT);
  });
});
