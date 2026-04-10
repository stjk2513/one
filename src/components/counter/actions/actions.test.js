import { describe, it, expect } from "vitest";
import { INCREMENT, DECREMENT } from "../constants";
import { increment, decrement } from "./counterActions";

describe("counter actions", () => {
  it("increment action returns INCREMENT type", () => {
    const action = increment();
    expect(action.type).toBe(INCREMENT);
  });

  it("decrement action returns DECREMENT type", () => {
    const action = decrement();
    expect(action.type).toBe(DECREMENT);
  });
});
