// useReducer is like useState 
// useReducer takes two parameter [1] reducer, [2] initialState
// when we have to hendle or manage multiple and complex state then we use useReducer
// Reducer takes two parameter [1] reducer, [2] initialstate
// its called pure function which accept state and action and return a new state
//pure function doesnot produce any side-effects
// the pure function always return the same output if the same arguments are passed in
//  // how we can do same wirh useReducer instance of useState


import React, { useReducer } from 'react'
//import { useState } from 'react'  // how we can do same wirh useReducer instance of useState


const initialState = 0

const reducer = (state, action) => {  // state => current state
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    else if (action.type === "DECREMENT") {
        return state - 1
    }
    else {
        return state
    }
}


function UrStateStore() {

    // const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
        </div>
    )
}

export default UrStateStore
