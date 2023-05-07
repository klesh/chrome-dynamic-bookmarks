import actionTypes from "@/shared/constants/actionTypes";
import {
  ActionHandler,
  FilterAction,
  FilterState,
} from "@/shared/types/store.types";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";

const initialState: FilterState = {
  searchText: "",
  parentId: "",
};

type Handler = ActionHandler<FilterState, FilterAction>;

const applyFilterHandler: Handler = (_, { filter }) => {
  const { searchText, parentId } = filter || {};
  return {
    searchText: searchText,
    parentId: parentId || (!searchText && "1"),
  };
};

const factory = new ActionHandlerFactory<FilterState, FilterAction>();
factory.register(actionTypes.APPLY_FILTER, applyFilterHandler);

export default createReducer(factory, initialState);
