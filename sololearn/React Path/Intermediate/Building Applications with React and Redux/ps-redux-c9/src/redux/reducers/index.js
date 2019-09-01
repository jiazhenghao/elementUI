import { combineReducers } from "redux";
import courses from "./courseReducer"; //因为courseReducer只有一个default，所以这里可以随便命名

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
