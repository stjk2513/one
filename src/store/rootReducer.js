import { combineReducers } from "redux";
import counterReducer from "../components/counter/reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
