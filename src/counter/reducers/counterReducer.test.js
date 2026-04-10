import { describe, it, expect } from "vitest";
import { INCREMENT, DECREMENT } from "../constants";
import counterReducer from "./counterReducer";

describe("counterReducer", () => {
  it("returns initial state when state is undefined", () => {
    const result = counterReducer(undefined, {});
    expect(result).toEqual({ count: 0 });
  });

  it("handles INCREMENT action", () => {
    const initialState = { count: 0 };
    const action = { type: INCREMENT };
    const result = counterReducer(initialState, action);
    expect(result.count).toBe(1);
  });

  it("handles DECREMENT action", () => {
    const initialState = { count: 5 };
    const action = { type: DECREMENT };
    const result = counterReducer(initialState, action);
    expect(result.count).toBe(4);
  });

  it("returns current state for unknown action", () => {
    const state = { count: 5 };
    const action = { type: "UNKNOWN" };
    const result = counterReducer(state, action);
    expect(result).toEqual(state);
  });
});
