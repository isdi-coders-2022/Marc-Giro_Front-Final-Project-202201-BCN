import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  usersReducer: usersReducer,
});

export default rootReducer;
