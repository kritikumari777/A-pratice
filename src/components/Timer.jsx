import React, { useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  const [myId, setMyId] = useState(0)

  const startFun = () => {
   const temp =
    setInterval(() => {
    setCount(prev => prev +1)
    }, 500)
  setMyId(temp)
    console.log(myId)
  }

  const stopFun = () => {
  console.log(myId)
  clearInterval(myId)
  console.log(myId)
  setMyId(0)
  }

  return (
    <>
    <div>{count}</div>
    <button type="text" onClick={myId=== 0 ? startFun : stopFun}>{myId===0 ? "Start" : "stop"}</button>
    </>
  )
}

export default Timer