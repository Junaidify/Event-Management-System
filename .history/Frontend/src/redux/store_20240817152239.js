
const rootReducer = combineReducer

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
