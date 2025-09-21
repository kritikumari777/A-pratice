// store application state

import { applyMiddleware, createStore } from "redux"; // Middle ware for the logger , 
// react Thunk allow as to do async operation, thunk allow you to return data
import rootReducer from "./rootReducer";
import logger from "redux-logger";

// import iceReducer from "./ice/iceReducer";
// import careReducer from "./cake/cakeReducer";

// const store = createStore(careReducer)
// const store = createStore(iceReducer)

// const store = createStore(rootReducer) // without middleWare

const store = createStore(rootReducer, applyMiddleware(logger))


export default store