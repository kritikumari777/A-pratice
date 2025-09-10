// reducer is a function that accept (state , action) as argument and return the new state 
// reducer responsible for doing the acton , it will reduce or add like that 

import { BY_CAKE } from "./cakeType"

const initialState = {
    numberOfCakes : 10
}

const careReducer = (state= initialState, action) =>{

    switch(action.type){
        case BY_CAKE : return {
            ...state, numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }

}

export default careReducer