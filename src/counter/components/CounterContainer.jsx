import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counterActions";
import CounterView from "./CounterView";

const CounterContainer = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return <CounterView count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />;
};

export default CounterContainer;
