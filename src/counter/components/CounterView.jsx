const CounterView = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default CounterView;
