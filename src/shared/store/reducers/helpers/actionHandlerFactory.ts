import { Action, AnyAction, Reducer } from "redux";

import { RecordKey } from "@/shared/types";

const defaultHandler = <TState>(state: TState | undefined): TState => {
  return state;
};

const defaultConfig = {
  defaultHandler,
} as const;

const formatKey = <TKey extends RecordKey>(key: TKey): string => {
  return key.toString().toUpperCase();
};

export class ActionHandlerFactory<
  TState = unknown,
  TAction extends Action<RecordKey> = AnyAction
> {
  defaultHandler: Reducer<TState>;
  handlers: Map<string, Reducer<TState>>;

  constructor(config = defaultConfig) {
    this.defaultHandler = config.defaultHandler || defaultHandler;
    this.handlers = new Map<string, Reducer<TState>>();
  }

  register(key: TAction["type"], handler: Reducer<TState>) {
    this.handlers.set(formatKey(key), handler);
  }

  getHandler(key: TAction["type"]) {
    const handler = this.handlers.get(formatKey(key));
    return handler || this.defaultHandler;
  }
}

export default ActionHandlerFactory;
