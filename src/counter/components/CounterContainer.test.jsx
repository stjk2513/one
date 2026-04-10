import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../../store/rootReducer";
import CounterContainer from "./CounterContainer";

const renderWithStore = (initialState) => {
  const store = createStore(rootReducer, initialState);
  return {
    ...render(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    ),
    store,
  };
};

describe("CounterContainer", () => {
  it("renders count from store", () => {
    renderWithStore({ counter: { count: 10 } });
    expect(screen.getByText("Count: 10")).toBeDefined();
  });

  it("dispatches increment action when button is clicked", () => {
    const { store } = renderWithStore({ counter: { count: 0 } });

    fireEvent.click(screen.getByText("Increment"));

    expect(store.getState().counter.count).toBe(1);
  });

  it("dispatches decrement action when button is clicked", () => {
    const { store } = renderWithStore({ counter: { count: 5 } });

    fireEvent.click(screen.getByText("Decrement"));

    expect(store.getState().counter.count).toBe(4);
  });
});
