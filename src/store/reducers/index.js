import { combineReducers } from "redux";
import sliderReducer from "./slider";
import summaryData from "./summaryData";
import userAuthReducer from "./userAuth";
const allReducers = combineReducers({
  slider: sliderReducer,
  summaryData: summaryData,
  userAuthReducer: userAuthReducer
});

export default allReducers;
