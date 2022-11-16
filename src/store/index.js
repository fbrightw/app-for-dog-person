import {applyMiddleware, compose, createStore} from "redux";
import RootReducer from "./reducer/RootReducer";
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
export const store = createStore(
    RootReducer,
    composeEnhancer(applyMiddleware(thunk, createLogger()))
);