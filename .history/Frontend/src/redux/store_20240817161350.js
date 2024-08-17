import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    fetch : fetchR
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
