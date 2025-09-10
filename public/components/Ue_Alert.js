// https://www.youtube.com/watch?v=ZbUcN0LBqwY

import react from 'react'
import { useState, useEffect } from 'react';

const Ue_Alert = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0)

    useEffect(() => {
        alert("it will increment")
    }, [num])

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>click {num}</button>
            <button onClick={() => setNum2(num2 + 1)}> click {num2}</button>
        </div>
    )
}

export default Ue_Alert