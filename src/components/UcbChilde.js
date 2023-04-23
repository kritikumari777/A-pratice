//callback parent child class

import { memo } from 'react'

function UcbChilde({ todo, addNewTodo }) {

    console.log("its a child component")
    return (
        <div>
            its a child class {todo} {addNewTodo}
        </div>
    )
}

export default memo(UcbChilde)
