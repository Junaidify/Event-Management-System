import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    fetch : fetch
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
