import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(false)

useEffect(() =>{
  const fetData =async () => {
    setLoading(true)
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setContent(res.data)
    } catch{
      console.log("error")
    } finally{
      setLoading(false)
    }
  }
  fetData()
}, [])

  return (
    <>
    {loading && <div>loading ''''</div>}
    {content.map((item, i) =>{
      return (
        <div key={i}>{item?.title}</div>
      )
    })}
    </>
  )
}

export default ApiCall