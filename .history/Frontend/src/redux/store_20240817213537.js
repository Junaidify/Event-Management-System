import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { fetchReducer } from "./fetchReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  login : login
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
