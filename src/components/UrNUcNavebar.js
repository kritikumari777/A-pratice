import React from 'react'
import { useAuth } from './UrNUcStateManage'

const UrNUcNavebar = () => {
    const {state, dispatch} = useAuth()
  return (
    <div>{state.isLogedIn ?
        <>
        <div>welcone</div>
        <button onClick={() => dispatch({type: "Logout"})}>Login</button>
        </>
       :
       <>
       <div>logout</div>
       <button onClick={() => dispatch({type: "Login"})}>Login</button> 
       </>
       }
        </div>
  )
}

export default UrNUcNavebar