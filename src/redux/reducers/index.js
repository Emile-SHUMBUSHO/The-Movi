import { combineReducers } from "redux";
import moviesReducers from "./movies.reducers";

export default combineReducers({
  Movies: moviesReducers,
});