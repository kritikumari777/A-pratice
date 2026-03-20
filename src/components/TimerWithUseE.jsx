import React, { useEffect, useState } from 'react'

const TimerWithUseE = () => {
  const [count, setCount] = useState(0)
  const [isStart, setIsStart] = useState(false)

  useEffect(() => {
    if(!isStart) return
    const increasefun = setInterval(() => {
        setCount(prev => prev+1)
    }, 1000)
 
   return () =>  window.clearInterval(increasefun)
  }, [isStart])

  const handleClick = () => {
    setIsStart(prev => !prev)
  }

  return (
    <div>
      {count}
      <button type="button" onClick={handleClick}>{isStart ? "Stop" : "Start"}</button>
    </div>
  )
}

export default TimerWithUseE