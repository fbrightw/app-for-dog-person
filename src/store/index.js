import {compose, createStore} from "redux";
import RootReducer from "./reducer/RootReducer";

export const store = createStore(
    RootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);