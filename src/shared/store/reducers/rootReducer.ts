import { combineReducers } from "redux";

import actionTypes from "@/shared/constants/actionTypes";
import { StoreState } from "@/shared/types/store.types";

import alert from "./alert";
import bookmarkNodes from "./bookmarkNodes";
import clipboard from "./clipboard";
import filter from "./filter";
import selectedNodeIds from "./selectedNodeIds";

const appReducer = combineReducers<StoreState>({
  alert,
  bookmarkNodes,
  clipboard,
  filter,
  selectedNodeIds,
});

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === actionTypes.SET_STATE && action.state) {
    state = { ...state, ...action.state };
  }
  return appReducer(state, action);
};

export default rootReducer;
