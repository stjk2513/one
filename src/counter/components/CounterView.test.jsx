import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CounterView from "./CounterView";

describe("CounterView", () => {
  it("displays the count", () => {
    render(<CounterView count={5} onIncrement={() => {}} />);
    expect(screen.getByText("Count: 5")).toBeDefined();
  });

  it("calls onIncrement when button is clicked", () => {
    const mockIncrement = vi.fn();
    render(<CounterView count={0} onIncrement={mockIncrement} />);

    fireEvent.click(screen.getByText("Increment"));

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });
});
