import React, { useState } from 'react'

const ChangeCol = () => {
    const [active, setActive] = useState(false)
  return (
    <button style={{background: active? 'red' : 'green'}} onClick={() => setActive(!active)}>change color</button>
  )
}

export default ChangeCol