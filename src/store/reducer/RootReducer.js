import { combineReducers } from "redux";
import {selectedBreedReducer} from "./selectedBreedReducer";

const RootReducer = combineReducers({
    breed: selectedBreedReducer
})

export default RootReducer;