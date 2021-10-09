import actionTypes from "@/shared/constants/actionTypes";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";

const initialState = {
  searchText: "",
  parentId: "",
};

function applyFilterHandler(_, { filter }) {
  const { searchText, parentId } = filter || {};
  return {
    searchText: searchText,
    parentId: parentId || (!searchText && "1"),
  };
}

const factory = new ActionHandlerFactory();
factory.register(actionTypes.APPLY_FILTER, applyFilterHandler);

export default createReducer(factory, initialState);
