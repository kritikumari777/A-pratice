import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BestApiCall = () => {
    const [data, steData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        setLoading(true)
        const fetchUser = async () => {
            try{
             const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
             const data = response?.data
             console.log(data)
             steData(data)
            }catch{
                setError(true)
    
            }finally{
                setLoading(false)
            }
        }

        fetchUser()
        
    }, [])

  return (
    <div>BestApiCall</div>
  )
}

export default BestApiCall