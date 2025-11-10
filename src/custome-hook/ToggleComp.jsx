import React from 'react'
import useToggle from './useToggles'


const ToggleComp = () => {
    const[isOpen, openToggle] = useToggle(false)
  return (
    <div>
    <button onClick={openToggle}>{isOpen ? "Please close" : "Please open"}</button>
    <div>
        {/* {isOpen && 
    <select>
        <option>Select a value</option>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    } */}
    </div>
    </div>
  )
}

export default ToggleComp