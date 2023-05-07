import { actionTypes } from "@/shared/constants";
import {
  ActionHandler,
  AlertAction,
  AlertState,
} from "@/shared/types/store.types";

import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";

const initialState: AlertState = {
  type: null,
  message: null,
};

type Handler = ActionHandler<AlertState, AlertAction>;

const handleSuccess: Handler = (_, { message }) => {
  return { type: "success", message };
};

const handleError: Handler = (_, { message }) => {
  return { type: "error", message };
};

const handleClear: Handler = () => {
  return {};
};

const factory = new ActionHandlerFactory<AlertState, AlertAction>();
factory.register(actionTypes.ALERT_SUCCESS, handleSuccess);
factory.register(actionTypes.ALERT_ERROR, handleError);
factory.register(actionTypes.ALERT_CLEAR, handleClear);

export default createReducer(factory, initialState);
