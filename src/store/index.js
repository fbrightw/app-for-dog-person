import {compose, createStore} from "redux";
import rootReducer from "./reducer/RootReducer";

// export const store = configureStore({
//         enhancers: undefined, middleware: undefined, preloadedState: undefined, reducer: undefined,
//         RootReducer
// })

export const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);