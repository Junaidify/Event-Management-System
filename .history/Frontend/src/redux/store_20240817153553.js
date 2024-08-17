import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import Pthunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
