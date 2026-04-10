const CounterView = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default CounterView;
