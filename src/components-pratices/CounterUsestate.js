import React from 'react'
import { useState } from 'react';

function CounterUsestate() {

    const [num, setnum] = useState(10)

    const hendlestate = () => {
        setnum(num - 1)
    }

    return (
        <div>
            <button onClick={hendlestate} type='submit'>{num}</button>
        </div>
    )
}

export default CounterUsestate
