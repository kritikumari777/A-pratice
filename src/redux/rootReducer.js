import { combineReducers } from "redux";
import careReducer from "./cake/cakeReducer";
import iceReducer from "./ice/iceReducer";

const rootReducer = combineReducers({
    cake: careReducer, 
    ice :iceReducer
})

export default rootReducer