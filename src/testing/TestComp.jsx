import React, { useState } from 'react'
import { returnFun } from './helper'

const TestComp = () => {

    const [name, setName] = useState("")
    const [showName, setShowName] = useState("")
    const [data, setData] = useState("")

    const handleApiCall = () => {
      setData("Hello")
    }
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
        {/* API call */}
        <div>
            <button data-testid='btn1' onClick={handleApiCall}>Api call</button>
            <div>{data}</div>
        </div>
        {/* not prenting but returning */}
        {/* <div>
          <button onClick={returnFun}>Print</button>
        </div> */}

        {/* Multiple element test by role */}
        <div>
        <button>Click 1</button>
        <button>Click 2</button>
        </div>
        <div>
        <label  htmlFor='input1'>User Name</label>
        <input id="input1" />
        <label  htmlFor='input2'>User Name</label>
        <input id="input2" />
        <div role='forTesting'>need to define role for test</div>
        </div>
    </div>
  )
}

export default TestComp