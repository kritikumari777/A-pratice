
import axios from 'axios'
import { useEffect, useState } from 'react'

const ApiCall = () => {
   const [data, setData] = useState([])

   useEffect(() =>{
      const getData = async () =>{
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(res.data)
        }
        catch{
            console.log("ndbf")
        }

      }
      getData()
   }, [])
  return (
    <>
    <div>{data?.map((item, i) =>{
        return <div key={i}>{item?.title}</div>
    })}</div>
    </>
  )
}

export default ApiCall