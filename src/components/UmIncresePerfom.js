// used to increase the performance
// https://www.youtube.com/watch?v=qySZIzZvZOY&t=546s

import React, { useState, useMemo } from 'react'

function UmIncresePerfom() {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    const isEven = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) {
            return num % 2 === 0
        }
    }, [num])

    return (
        <div>
            <div>
                <button onClick={() => setNum(num + 1)}>click counter one - {num} </button>
                <span> {isEven ? 'even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={() => setNum2(num2 + 1)}>click counter two - {num2}</button>
            </div>
        </div>
    )
}

export default UmIncresePerfom

