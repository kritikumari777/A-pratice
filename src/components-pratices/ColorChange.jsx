import React, {useState} from 'react'

const ColorChange = () => {

  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

  const handleCount = () =>{
    setCount(count + 1)
    setActive(!active)
  }
  return (
    <div>
    <button onClick={handleCount} style={{background: active ? 'pink' : 'yellow'}}>Click-{count}</button>
    </div>
  )
}

export default ColorChange