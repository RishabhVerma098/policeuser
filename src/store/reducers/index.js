import { combineReducers } from "redux";
import sliderReducer from "./slider";
import summaryData from "./summaryData";
const allReducers = combineReducers({
  slider: sliderReducer,
  summaryData: summaryData
});

export default allReducers;
