import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
function ApiCall() {

    const [counter, setcounter] = useState(0)
    const [api, setapi] = useState([])
    const [loding, setloding] = useState(true)
    const [error, seterror] = useState(true) // or false

    useEffect(() => {
        setloding(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => (response.data))
            .then(data => {
                setapi(data)
                setloding(false)
            })
            .catch(err => {
                seterror(true)
                setloding(false)
            })
    }, [counter]);

    return (
        <div className="App">
            <h1>{loding && "loding......"}</h1>
            <button onClick={() => setcounter(counter + 1)}>
                click me - {counter} </button>
            {api.map((a, index) => (<h3 key={index}>{a.id} {a.title}</h3>))}

            <h3>{error && "FOUND ERROR!!! somthing wrong"}</h3>

        </div>
    )
}

export default ApiCall
