import { combineReducers } from "redux";
import loading from "./LoadingReducer";
import videos from "./VideoReducer";

export default combineReducers({
  loading,
  videos
});
