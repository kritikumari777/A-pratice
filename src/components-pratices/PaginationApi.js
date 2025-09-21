import React, { useEffect, useState } from 'react'

const PaginationApi = () => {

  const [users, setUser] = useState([])
  const [page, setPage] = useState(1)

  const fetchUser = async () => {
      const res = await fetch("https://dummyjson.com/users")
      const  data = await res.json()
      
      if(data?.users && data?.users?.length > 0){
        setUser(data?.users)
      }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const selectedPage = (selectedPage) => {
     console.log(page,selectedPage)
    if(selectedPage >= 1 && selectedPage <= users?.length/10 && selectedPage !== page ){
      setPage(selectedPage)
    }
  }

  return (
    <>
    {users?.length > 0 && 
     <div>
      {users?.slice(page*10 -10 , page*10).map((user, i) =>{
         return (
          <div style={{padding: "5px", margin: "2px", border: "1px", background: "pink" }} key={user.id}><span>{user?.firstName}</span><span>{user?.email}</span></div>
         )
      })}

      {users?.length > 0 && <div>
        <button  style={{cursor: 'pointer', display: page === 1 ? "none" : "inline"}} onClick={() => selectedPage(page - 1)}>◀</button>
        {
        [...Array(users?.length/10)].map((_, i) => {
          return <button  style={{cursor: 'pointer'}} onClick={() => selectedPage(i+1)}>{i+1}</button>
        })
        }
        <button style={{cursor: 'pointer', display: page > users.length/20 ? "none" : "inline"}} onClick={() => selectedPage(page + 1)}>▶</button>
        </div>}
    </div>
    }
    </>
    
  )
}

export default PaginationApi