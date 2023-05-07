import {
  BookmarkNodesAction,
  BookmarkNodesState,
} from "@/shared/types/store.types";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";
import registerActionHandlers from "./registerActionHandlers";
import registerEventHandlers from "./registerEventHandlers";

const initialState: BookmarkNodesState = {
  data: {},
  isFaulted: false,
  errMsg: "",
};

const factory = new ActionHandlerFactory<
  BookmarkNodesState,
  BookmarkNodesAction
>();
registerActionHandlers(factory);
registerEventHandlers(factory);

export default createReducer(factory, initialState);
