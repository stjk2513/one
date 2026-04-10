import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CounterView from "./CounterView";

describe("CounterView", () => {
  it("displays the count", () => {
    render(<CounterView count={5} onIncrement={() => {}} onDecrement={() => {}} />);
    expect(screen.getByText("Count: 5")).toBeDefined();
  });

  it("calls onIncrement when button is clicked", () => {
    const mockIncrement = vi.fn();
    render(<CounterView count={0} onIncrement={mockIncrement} onDecrement={() => {}} />);

    fireEvent.click(screen.getByText("Increment"));

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it("calls onDecrement when button is clicked", () => {
    const mockDecrement = vi.fn();
    render(<CounterView count={0} onIncrement={() => {}} onDecrement={mockDecrement} />);

    fireEvent.click(screen.getByText("Decrement"));

    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });
});
