import React, { useRef, useState } from 'react'

const TimerWithFun = () => {
  const [count, setCount] = useState(0)

  const intervalRef = useRef(null)

  const startFun = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    } else {
      intervalRef.current =
        setInterval(() => {
          setCount(prev => prev + 1)
        }, 500)
    }
  }

  return (
    <>
      <div>{count}</div>
      <button type="text" onClick={startFun}>{!intervalRef.current ? "Start" : "stop"}</button>
    </>
  )
}

export default TimerWithFun