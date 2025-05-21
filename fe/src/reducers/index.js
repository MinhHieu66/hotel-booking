import { combineReducers } from "redux";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;
