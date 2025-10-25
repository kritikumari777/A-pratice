// usecallBack is similer to useMamo hook
//in useMamo only return value is passed to the assigned value but
// in useCallback intire function is pass to the assigned value

//useCallback memoizes callback functions received as props, 
//so they're not recreated on every re-render. 
//Using useCallback we improve the performance of our app.

// f you don’t use useCallback, the handleIncrement function is recreated on every render,
// useCallback only affects whether the function reference changes,
//not whether the component re-renders.
// useCallback(() => {...}, []) creates the function only once, when the component mounts.

import { useCallback } from 'react'
import { useState } from 'react';
import UcbChilde from './UcbChilde';

function UcbParent() {

    const [counter, setcounter] = useState(0);

    const handleIncrease = useCallback(() => {
        setcounter(prevstate => prevstate + 1)
        console.log("number increased")
    },[]) //// depends on nothing → stays same across renders

    return (
        <div>
            <h3>use callback hook</h3>

            <h3 >counter - {counter}</h3>

            <UcbChilde  handleIncrease={handleIncrease}/>
        </div>
    )
}

export default UcbParent
