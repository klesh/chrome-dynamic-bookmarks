import { Action, AnyAction, Reducer } from "redux";

import { RecordKey } from "@/shared/types";

import ActionHandlerFactory from "./actionHandlerFactory";

export default function createReducer<
  TState = unknown,
  TAction extends Action<RecordKey> = AnyAction
>(
  handlerFactory: ActionHandlerFactory<TState, TAction>,
  initialState: TState
): Reducer<TState, TAction> {
  return function (state = initialState, action) {
    const handle = handlerFactory.getHandler(action.type);
    return handle(state, action);
  };
}
