import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter-reducer';

const rootReducer = combineReducers({

    counter: counterReducer

})


export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}