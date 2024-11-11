import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "../Auth/Reducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    auth:AuthReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));