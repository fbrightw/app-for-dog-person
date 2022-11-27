import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import likedBreedsReducer from './LikedBreedsSlice'

const reducer = combineReducers({
  likedBreeds: likedBreedsReducer,
})

// export const store = configureStore({
//     reducer: reducer
// })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk, createLogger()))
);
