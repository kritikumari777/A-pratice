// store application state

import { createStore } from "redux";
import careReducer from "./cake/cakeReducer";

const store = createStore(careReducer)

export default store