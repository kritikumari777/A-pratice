//callback parent child class

import { memo } from 'react'

function UcbChilde({ handleIncrease}) {

    console.log("its a child component")
    return (
        <div >
            <button onClick={handleIncrease}>Click</button>
        </div>
    )
}

export default memo(UcbChilde)
