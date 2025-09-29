import React, { useState } from 'react'

const TestComp = () => {

    const [name, setName] = useState("")
    const [showName, setShowName] = useState("")
  return (
    <div>
        <h3>Welcome Kriti</h3>
        <div>
        {/* <img title='Title' src={} alt="title"/> */}
        </div>
        <input type='text' name='user name' id="1"
         placeholder='Enter Name'
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
         <button onClick={() => setShowName(name)}>Sumit</button>
        <div>{showName}</div>
    </div>
  )
}

export default TestComp