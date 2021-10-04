import ActionHandlerFactory from "../helpers/actionHandlerFactory";
import createReducer from "../helpers/createReducer";
import registerActionHandlers from "./registerActionHandlers";
import registerEventHandlers from "./registerEventHandlers";

const initialState = {
  data: {},
  isFaulted: false,
  errMsg: "",
};

const factory = new ActionHandlerFactory();
registerActionHandlers(factory);
registerEventHandlers(factory);

export default createReducer(factory, initialState);
