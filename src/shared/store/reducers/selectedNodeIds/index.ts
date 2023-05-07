import actionTypes from "@/shared/constants/actionTypes";
import { indexOfOrDefault, sliceRange } from "@/shared/lib/array";
import {
  ActionHandler,
  SelectedNodeIdsAction,
  SelectedNodeIdsState,
} from "@/shared/types/store.types";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";

const initialState: SelectedNodeIdsState = { data: [], pivot: null };

type Handler = ActionHandler<SelectedNodeIdsState, SelectedNodeIdsAction>;

const setSelectedHandler: Handler = (state, { data }) => {
  if (!data) {
    return { ...state, data: [] };
  }
  if (Array.isArray(data)) {
    return { ...state, data };
  }
  return { ...state, data: [data] };
};

const appendSelectedHandler: Handler = (state, { data }) => {
  if (Array.isArray(data)) {
    return { ...state, data: [...state.data, ...data] };
  }
  return { ...state, data: [...state.data, data] };
};

const removeSelectedHandler: Handler = (state, { data }) => {
  if (typeof data !== "string") return state;
  return { ...state, data: state.data.filter((val) => val != data) };
};

const clearSelectedHandler: Handler = () => {
  return { data: [] };
};

const toggleSelectedHandler: Handler = (state, action) => {
  if (typeof action.data !== "string") return state;

  const data = action.data;

  if (state.data.includes(data)) {
    return removeSelectedHandler(state, { data });
  } else {
    return appendSelectedHandler(state, { data });
  }
};

const setSelectedPivotHandler: Handler = (_, { pivot }) => {
  const data = pivot ? [pivot] : [];
  return { pivot, data };
};

const selectRangeByPivotHandler: Handler = (state, action) => {
  const actionData = Array.isArray(action.data) ? action.data : [];
  const from = action.from || "";

  const pivot = state.pivot;
  if (pivot === from || !pivot) {
    return { pivot: from, data: [from] };
  }

  const fromIndex = indexOfOrDefault(actionData, from, 0);
  const pivotIndex = indexOfOrDefault(actionData, pivot, fromIndex);
  const newData = sliceRange(actionData, fromIndex, pivotIndex);
  return { ...state, data: newData };
};

const factory = new ActionHandlerFactory<
  SelectedNodeIdsState,
  SelectedNodeIdsAction
>();
factory.register(actionTypes.SET_SELECTED, setSelectedHandler);
factory.register(actionTypes.APPEND_SELECTED, appendSelectedHandler);
factory.register(actionTypes.REMOVE_SELECTED, removeSelectedHandler);
factory.register(actionTypes.CLEAR_SELECTED, clearSelectedHandler);
factory.register(actionTypes.TOGGLE_SELECTED, toggleSelectedHandler);
factory.register(actionTypes.SET_SELECTED_PIVOT, setSelectedPivotHandler);
factory.register(actionTypes.SELECT_RANGE_BY_PIVOT, selectRangeByPivotHandler);

export default createReducer(factory, initialState);
