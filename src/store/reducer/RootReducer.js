import { combineReducers } from "redux";
import selectedBreedReducer from "./selectedBreedReducer";

const RootReducer = combineReducers({
    selectedBreedReducer: selectedBreedReducer
})

export default RootReducer;