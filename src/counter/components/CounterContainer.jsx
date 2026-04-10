import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/counterActions";
import CounterView from "./CounterView";

const CounterContainer = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return <CounterView count={count} onIncrement={handleIncrement} />;
};

export default CounterContainer;
