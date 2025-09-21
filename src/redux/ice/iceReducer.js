import { BUY_ICE } from "./iceType"

const initialState = {
    numOfIce : 10
}

const iceReducer = (state=initialState, action) => {

    switch(action.type){
        case BUY_ICE : return {...state, numOfIce: state?.numOfIce-1}
        default: return state
    }

}

export default iceReducer