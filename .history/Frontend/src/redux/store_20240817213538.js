import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { fetchReducer } from "./fetchReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  login : loginReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
