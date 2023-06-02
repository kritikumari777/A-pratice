import { useState } from 'react'

const GoodPratice = () => {

    const [input, setinput] = useState("")
    const [user, setuser] = useState({
        name: "kriti", email: "123jjdg@gmail.com"
    });

    const changeName = () => {
        setuser((prev) => ({ ...prev, name: input }))
        setinput("")
    }

    return (
        <>
            <input onChange={(e) => setinput(e.target.value)}></input>
            <button onClick={changeName}>click</button>
            <div>User is:{user.name}</div>
        </>
    )
}

export default GoodPratice