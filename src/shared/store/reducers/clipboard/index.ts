import { actionTypes, clipboardTypes } from "@/shared/constants";
import {
  ActionHandler,
  ClipboardAction,
  ClipboardState,
} from "@/shared/types/store.types";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";

const initialState: ClipboardState = {};

type Handler = ActionHandler<ClipboardState, ClipboardAction>;

const handleCopy: Handler = (_, { data }) => {
  return {
    type: clipboardTypes.COPIED,
    data,
  };
};

const handleCut: Handler = (_, { data }) => {
  return {
    type: clipboardTypes.CUT,
    data,
  };
};

const factory = new ActionHandlerFactory<ClipboardState, ClipboardAction>();
factory.register(actionTypes.COPY_TO_CLIPBOARD, handleCopy);
factory.register(actionTypes.CUT_TO_CLIPBOARD, handleCut);

export default createReducer(factory, initialState);
