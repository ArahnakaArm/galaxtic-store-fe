/* import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/core"
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({
    rootReducer,
    initalState,
    devTools: true,
}
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
 */


import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import todosReducer from './reducers/userProfileReducer'
const reducer = {
    users : todosReducer,
 
}
const preloadedState = {
    users: { name : 'Teetawat'}


}
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
    preloadedState,

})
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);