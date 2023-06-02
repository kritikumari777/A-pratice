import React, {useState} from 'react'

const ColorChange = () => {

  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)
  const [color, setColor] = useState("blue")

  const handleCount = () =>{
    setCount(count + 1)
    setActive(!active)
    setColor('green')
  }
  return (
    <div>
    <button onClick={handleCount} style={{background: active ? 'pink' : 'yellow'}}>Click-{count}</button>
    <button onClick={handleCount} style={{background: color}}>Click-{count}</button>
    </div>
  )
}

export default ColorChange