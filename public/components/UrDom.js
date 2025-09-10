// useRef allows as to direct access to the dom within functional component
// useRef is very very similar to useState
// its doesent rerender our component
// useRef is used for uncontrolled form
// useRef doesent rerender again and again
// https://www.youtube.com/watch?v=zdQQraZEgnc

import React, { useRef } from 'react'

function UrDom() {

    const luckName = useRef(null)


    const submitForm = (e) => {
        e.preventDefault()
        console.log(luckName.current) // by the help of current we get property of current element ie dom
        console.log(luckName.current.value)  // and by the help of value we can get value of current element ie dom
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="luckNmae">enter tour luckyname</label>
                <input ref={luckName} type="text" id="luckName" />

                <br></br>
                <button>Submit</button>

            </form>

        </div>
    )
}

export default UrDom
