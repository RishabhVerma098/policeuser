import { combineReducers } from "redux";
import sliderReducer from "./slider";
import summaryData from "./summaryData";
import userAuthReducer from "./userAuth";
import handlePanelListReducer from "./handlePanelList";
import allFirPassReducer from "./allFirPass";
const allReducers = combineReducers({
  slider: sliderReducer,
  summaryData: summaryData,
  userAuthReducer: userAuthReducer,
  handlePanelListReducer: handlePanelListReducer,
  allFirPassReducer: allFirPassReducer
});

export default allReducers;
