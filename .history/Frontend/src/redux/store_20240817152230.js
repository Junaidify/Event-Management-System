
const rootReducer = ()

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
