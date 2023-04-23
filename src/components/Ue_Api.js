// whenever a component is render useEffect will be called
// useEffect used in the place of componentDidMount, Componentdidupdate, ComponentDidUnmount
// after render whatever we will write in useEffect
// useEffect acept a function
// after render if we want to do any thing
// in useeffect we cant return the value and
// we cant store the value in a variable but
// in useMamo hook we can return and store in a variable
// fast argument is function and 2nd argument is dependency array []
//https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=486s

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Us_Api() {

    const [display, setDisplay] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${display}`)
            .then(response => response.data)
            .then(data => setItems(data))
            .catch(error => console.log(error))

        // fetch(`https://jsonplaceholder.typicode.com/${display}`)
        //     .then(response => response.json())
        //     .then(json => setItems(json))
        //     .catch(error => console.log(error))

    }, [display])

    return (
        <div>
            <h1>{display}</h1>
            <button type='submit' onClick={() => setDisplay('posts')}>Posts</button>
            <button type='submit' onClick={() => setDisplay('users')}>Users</button>
            <button type='submit' onClick={() => setDisplay('comments')}>Comments</button>

            {items.map((item, index) => {
                return <li key={index}>{JSON.stringify(item)}</li>
            })}

        </div>
    )
}

export default Us_Api