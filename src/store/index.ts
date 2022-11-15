import {configureStore, createStore} from "@reduxjs/toolkit";
import RootReducer from "./reducer/RootReducer";

export const store = configureStore({
        RootReducer
})
