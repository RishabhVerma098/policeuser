import { combineReducers } from "redux";
import sliderReducer from "./slider";
const allReducers = combineReducers({ slider: sliderReducer });

export default allReducers;
