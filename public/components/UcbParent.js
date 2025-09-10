// usecallBack is similer to useMamo hook
//in useMamo only return value is passed to the assigned value but
// in useCallback intire function is pass to the assigned value

//useCallback memoizes callback functions received as props, 
//so they're not recreated on every re-render. 
//Using useCallback we improve the performance of our app.
//https://www.youtube.com/watch?v=Gj68rN0vLSc


import React, { useCallback } from 'react'
import { useState } from 'react';
import UcbChilde from './UcbChilde';

function UcbParent() {

    const [counter, setcounter] = useState(0);
    const [todo, settodo] = useState('render')

    const handleIncrease = () => {
        setcounter(prevstate => prevstate + 1)
        console.log("number increased")
    }
    const handleAddNewTodo = useCallback(() => {
        console('same operation')
        settodo('')
    }, [todo])

    return (
        <div>
            <h3>use callback hook</h3>

            <UcbChilde todo={todo} addNewtodor={handleAddNewTodo}></UcbChilde>

            <h3 >counter - {counter}</h3>
            <button onClick={handleIncrease}>increase</button>
        </div>
    )
}

export default UcbParent
