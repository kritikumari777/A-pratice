import React, { useEffect, useRef, useState, useMemo } from 'react'

const DomComp = () => {
  const [name, setName] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [num, setNum] = useState(0)
  const domInput = useRef()

  const handleChange = (e) => {
    setName(e.target.value)
    domInput.current.style.color = "red"
    domInput.current.focus()
  }

useMemo(() => {
   for(let i=0; i<1000; i++){
    setNum(i)
   }
}, num)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {   // only open on Enter key
        setIsOpen(true)
      }
      if (e.key === "Escape") {  // close on Escape
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, []) // ✅ only run once


  return (
    <div>
      <input
        ref={domInput}
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type here"
      />
      <div>{name}</div>

      {isOpen && (
        <select>
          <option value="">Choose an option</option>
          <option value="one">Option One</option>
          <option value="two">Option Two</option>
        </select>
      )}
    </div>
  )
}

export default DomComp
