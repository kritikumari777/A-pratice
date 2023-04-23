import React, { useState } from 'react'

function ArrValueDelet() {

    const [arr, setarr] = useState([
        { id: '1', fastname: 'kriti', lastname: 'kumari', rollnum: '20' },
        { id: '2', fastname: 'priti', lastname: 'kumari', rollnum: '25' },
        { id: '3', fastname: 'kakriti', lastname: 'kumari', rollnum: '27' },
    ]);

    const hendledelet = (id) => {
        const newarr = arr.filter((a) => a.id !== id)
        setarr(newarr)
    }

    return (
        <div>

            {arr.map((a) => (<div> {a.id} {a.fastname} {a.lastname} {a.rollnum} <span><button onClick={() => hendledelet(a.id)}>delet</button></span> </div>))}

        </div>
    )
}

export default ArrValueDelet
